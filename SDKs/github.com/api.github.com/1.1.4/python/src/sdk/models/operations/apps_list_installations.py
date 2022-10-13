from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AppsListInstallationsQueryParams:
    outdated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outdated', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListInstallationsRequest:
    query_params: AppsListInstallationsQueryParams = field(default=None)
    

@dataclass
class AppsListInstallationsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    installations: Optional[List[shared.Installation]] = field(default=None)
    
