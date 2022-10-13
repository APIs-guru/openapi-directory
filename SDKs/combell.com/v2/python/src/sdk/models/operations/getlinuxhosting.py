from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLinuxHostingPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinuxHostingQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLinuxHostingRequest:
    path_params: GetLinuxHostingPathParams = field(default=None)
    query_params: GetLinuxHostingQueryParams = field(default=None)
    

@dataclass
class GetLinuxHostingResponse:
    content_type: str = field(default=None)
    linux_hosting_detail: Optional[shared.LinuxHostingDetail] = field(default=None)
    status_code: int = field(default=None)
    
