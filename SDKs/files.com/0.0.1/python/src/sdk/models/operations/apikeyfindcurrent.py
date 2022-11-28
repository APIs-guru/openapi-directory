from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIKeyFindCurrentResponse:
    content_type: str = field()
    status_code: int = field()
    api_key_entity: Optional[shared.APIKeyEntity] = field(default=None)
    
