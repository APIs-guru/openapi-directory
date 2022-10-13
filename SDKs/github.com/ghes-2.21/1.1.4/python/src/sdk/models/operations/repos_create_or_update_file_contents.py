from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateOrUpdateFileContentsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateOrUpdateFileContentsRequestBodyAuthor:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class ReposCreateOrUpdateFileContentsRequestBodyCommitter:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class ReposCreateOrUpdateFileContentsRequestBody:
    author: Optional[ReposCreateOrUpdateFileContentsRequestBodyAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    committer: Optional[ReposCreateOrUpdateFileContentsRequestBodyCommitter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    

@dataclass
class ReposCreateOrUpdateFileContentsRequest:
    path_params: ReposCreateOrUpdateFileContentsPathParams = field(default=None)
    request: Optional[ReposCreateOrUpdateFileContentsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateOrUpdateFileContentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    file_commit: Optional[shared.FileCommit] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
