from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class PostChangePasswordSample:
    old_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'old_password' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    

@dataclass
class PostChangePasswordRequest:
    request: PostChangePasswordSample = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostChangePasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    
