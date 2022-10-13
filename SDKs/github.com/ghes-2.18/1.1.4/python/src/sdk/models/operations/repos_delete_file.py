from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposDeleteFilePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposDeleteFileRequestBodyAuthor:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class ReposDeleteFileRequestBodyCommitter:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class ReposDeleteFileRequestBody:
    author: Optional[ReposDeleteFileRequestBodyAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    committer: Optional[ReposDeleteFileRequestBodyCommitter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    

@dataclass
class ReposDeleteFileRequest:
    path_params: ReposDeleteFilePathParams = field(default=None)
    request: Optional[ReposDeleteFileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class ReposDeleteFile503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ReposDeleteFileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    file_commit: Optional[shared.FileCommit] = field(default=None)
    repos_delete_file_503_application_json_object: Optional[ReposDeleteFile503ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
