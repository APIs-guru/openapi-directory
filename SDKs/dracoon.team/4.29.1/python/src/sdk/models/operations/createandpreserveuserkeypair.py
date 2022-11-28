from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAndPreserveUserKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAndPreserveUserKeyPairRequest:
    headers: CreateAndPreserveUserKeyPairHeaders = field()
    request: shared.CreateKeyPairRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAndPreserveUserKeyPairResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
