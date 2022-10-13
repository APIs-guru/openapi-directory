from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class UsersDeleteEmailForAuthenticatedRequestBody1:
    emails: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    

@dataclass
class UsersDeleteEmailForAuthenticatedRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersDeleteEmailForAuthenticatedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
