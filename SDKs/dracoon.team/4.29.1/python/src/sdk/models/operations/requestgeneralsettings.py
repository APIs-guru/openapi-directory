from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestGeneralSettingsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestGeneralSettingsRequest:
    headers: RequestGeneralSettingsHeaders = field(default=None)
    

@dataclass
class RequestGeneralSettingsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    general_settings: Optional[shared.GeneralSettings] = field(default=None)
    status_code: int = field(default=None)
    
