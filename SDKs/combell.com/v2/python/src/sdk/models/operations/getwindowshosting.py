from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWindowsHostingPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWindowsHostingQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWindowsHostingRequest:
    path_params: GetWindowsHostingPathParams = field()
    query_params: GetWindowsHostingQueryParams = field()
    

@dataclass
class GetWindowsHostingResponse:
    content_type: str = field()
    status_code: int = field()
    windows_hosting_detail: Optional[shared.WindowsHostingDetail] = field(default=None)
    
