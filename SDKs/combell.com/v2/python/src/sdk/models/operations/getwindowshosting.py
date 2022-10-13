from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWindowsHostingPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWindowsHostingQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWindowsHostingRequest:
    path_params: GetWindowsHostingPathParams = field(default=None)
    query_params: GetWindowsHostingQueryParams = field(default=None)
    

@dataclass
class GetWindowsHostingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    windows_hosting_detail: Optional[shared.WindowsHostingDetail] = field(default=None)
    
