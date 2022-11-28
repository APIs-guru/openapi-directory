from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AppsListInstallationsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListInstallationsHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsListInstallationsRequest:
    headers: AppsListInstallationsHeaders = field()
    query_params: AppsListInstallationsQueryParams = field()
    

@dataclass
class AppsListInstallationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    installation_ghes_2s: Optional[List[shared.InstallationGhes2]] = field(default=None)
    
