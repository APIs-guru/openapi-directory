from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class GistsCreateRequestBodyFiles:
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    
class GistsCreateRequestBodyPublic2Enum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclass_json
@dataclass
class GistsCreateRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    files: dict[str, GistsCreateRequestBodyFiles] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    public: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    

@dataclass
class GistsCreateRequest:
    request: Optional[GistsCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GistsCreateResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_simple: Optional[shared.GistSimple] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
