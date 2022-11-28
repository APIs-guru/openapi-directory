from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOAuthClientResponse:
    content_type: str = field()
    status_code: int = field()
    o_auth_client: Optional[Any] = field(default=None)
    
