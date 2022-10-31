from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSystemDefaultsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSystemDefaultsRequest:
    headers: UpdateSystemDefaultsHeaders = field(default=None)
    request: shared.UpdateSystemDefaults = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSystemDefaultsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    system_defaults: Optional[shared.SystemDefaults] = field(default=None)
    
