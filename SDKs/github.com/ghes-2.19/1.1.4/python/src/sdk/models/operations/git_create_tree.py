from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GitCreateTreePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class GitCreateTreeRequestBodyTreeModeEnum(str, Enum):
    ONE_HUNDRED_THOUSAND_SIX_HUNDRED_AND_FORTY_FOUR = "100644"
    ONE_HUNDRED_THOUSAND_SEVEN_HUNDRED_AND_FIFTY_FIVE = "100755"
    FORTY_THOUSAND = "040000"
    ONE_HUNDRED_AND_SIXTY_THOUSAND = "160000"
    ONE_HUNDRED_AND_TWENTY_THOUSAND = "120000"

class GitCreateTreeRequestBodyTreeTypeEnum(str, Enum):
    BLOB = "blob"
    TREE = "tree"
    COMMIT = "commit"


@dataclass_json
@dataclass
class GitCreateTreeRequestBodyTree:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    mode: Optional[GitCreateTreeRequestBodyTreeModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    type: Optional[GitCreateTreeRequestBodyTreeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GitCreateTreeRequestBody:
    base_tree: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_tree' }})
    tree: List[GitCreateTreeRequestBodyTree] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tree' }})
    

@dataclass
class GitCreateTreeRequest:
    path_params: GitCreateTreePathParams = field(default=None)
    request: Optional[GitCreateTreeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GitCreateTreeResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    git_tree: Optional[shared.GitTree] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
