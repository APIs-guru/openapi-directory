from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIKeyFindCurrentResponse:
    api_key_entity: Optional[shared.APIKeyEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
