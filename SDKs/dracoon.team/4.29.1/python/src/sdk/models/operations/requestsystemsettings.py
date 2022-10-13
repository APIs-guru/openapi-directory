from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestSystemSettingsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestSystemSettingsRequest:
    headers: RequestSystemSettingsHeaders = field(default=None)
    

@dataclass
class RequestSystemSettingsResponse:
    config_option_list: Optional[shared.ConfigOptionList] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
