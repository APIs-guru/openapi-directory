from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestSystemSettingsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestSystemSettingsRequest:
    headers: RequestSystemSettingsHeaders = field()
    

@dataclass
class RequestSystemSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    config_option_list: Optional[shared.ConfigOptionList] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
