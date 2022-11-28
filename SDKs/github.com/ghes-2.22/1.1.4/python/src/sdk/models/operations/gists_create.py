from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class GistsCreateRequestBodyFiles:
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    
class GistsCreateRequestBodyPublic2Enum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclass_json
@dataclass
class GistsCreateRequestBody:
    files: dict[str, GistsCreateRequestBodyFiles] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    public: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclass
class GistsCreateRequest:
    request: Optional[GistsCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GistsCreateResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_simple: Optional[shared.GistSimple] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
