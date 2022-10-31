from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSystemSettingsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSystemSettingsRequest:
    headers: UpdateSystemSettingsHeaders = field(default=None)
    request: shared.ConfigOptionList = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSystemSettingsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
