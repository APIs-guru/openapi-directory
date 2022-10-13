from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOAuthClientResponse:
    content_type: str = field(default=None)
    o_auth_client: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
