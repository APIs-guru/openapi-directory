from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetSettingsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetSettingsRequest:
    headers: SetSettingsHeaders = field()
    request: shared.CustomerSettingsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    customer_settings_response: Optional[shared.CustomerSettingsResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
