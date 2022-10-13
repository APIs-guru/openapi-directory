from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GitCreateCommitPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GitCreateCommitRequestBodyAuthor:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GitCreateCommitRequestBodyCommitter:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GitCreateCommitRequestBody:
    author: Optional[GitCreateCommitRequestBodyAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    committer: Optional[GitCreateCommitRequestBodyCommitter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    parents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parents' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    tree: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tree' }})
    

@dataclass
class GitCreateCommitRequest:
    path_params: GitCreateCommitPathParams = field(default=None)
    request: Optional[GitCreateCommitRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GitCreateCommitResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    git_commit: Optional[shared.GitCommit] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
