from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestGeneralSettingsInfoHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestGeneralSettingsInfoRequest:
    headers: RequestGeneralSettingsInfoHeaders = field(default=None)
    

@dataclass
class RequestGeneralSettingsInfoResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    general_settings_info: Optional[shared.GeneralSettingsInfo] = field(default=None)
    status_code: int = field(default=None)
    
