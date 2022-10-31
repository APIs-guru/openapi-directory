from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AppsListInstallationsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListInstallationsHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsListInstallationsRequest:
    query_params: AppsListInstallationsQueryParams = field(default=None)
    headers: AppsListInstallationsHeaders = field(default=None)
    

@dataclass
class AppsListInstallationsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    installation_ghes_2s: Optional[List[shared.InstallationGhes2]] = field(default=None)
    
