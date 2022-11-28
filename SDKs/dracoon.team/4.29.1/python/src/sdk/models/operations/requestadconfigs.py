from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestAdConfigsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestAdConfigsRequest:
    headers: RequestAdConfigsHeaders = field()
    

@dataclass
class RequestAdConfigsResponse:
    content_type: str = field()
    status_code: int = field()
    active_directory_config_list: Optional[shared.ActiveDirectoryConfigList] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
