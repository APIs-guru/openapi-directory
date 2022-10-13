from dataclasses import dataclass, field
from typing import Any


@dataclass
class RegisterUserRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
