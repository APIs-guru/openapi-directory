from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTokenResponse:
    content_type: str = field()
    status_code: int = field()
    ee_create_token_response: Optional[shared.EeCreateTokenResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
