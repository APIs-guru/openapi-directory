from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestAdConfigsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestAdConfigsRequest:
    headers: RequestAdConfigsHeaders = field(default=None)
    

@dataclass
class RequestAdConfigsResponse:
    active_directory_config_list: Optional[shared.ActiveDirectoryConfigList] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
