from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class PostVerifyPasswordChangeSample:
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guid' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    

@dataclass
class PostVerifyPasswordChangeRequest:
    request: PostVerifyPasswordChangeSample = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVerifyPasswordChangeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    
