from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetProfileAttributesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetProfileAttributesRequest:
    headers: SetProfileAttributesHeaders = field(default=None)
    request: shared.ProfileAttributesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetProfileAttributesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    profile_attributes: Optional[shared.ProfileAttributes] = field(default=None)
    status_code: int = field(default=None)
    
