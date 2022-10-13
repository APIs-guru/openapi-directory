from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GitCreateTagPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GitCreateTagRequestBodyTagger:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class GitCreateTagRequestBodyTypeEnum(str, Enum):
    COMMIT = "commit"
    TREE = "tree"
    BLOB = "blob"


@dataclass_json
@dataclass
class GitCreateTagRequestBody:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    object: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    tagger: Optional[GitCreateTagRequestBodyTagger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagger' }})
    type: GitCreateTagRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class GitCreateTagRequest:
    path_params: GitCreateTagPathParams = field(default=None)
    request: Optional[GitCreateTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GitCreateTagResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    git_tag: Optional[shared.GitTag] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
