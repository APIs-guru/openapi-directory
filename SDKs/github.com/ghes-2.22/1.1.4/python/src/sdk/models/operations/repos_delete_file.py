from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposDeleteFilePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposDeleteFileRequestBodyAuthor:
    r"""ReposDeleteFileRequestBodyAuthor
    object containing information about the author.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class ReposDeleteFileRequestBodyCommitter:
    r"""ReposDeleteFileRequestBodyCommitter
    object containing information about the committer.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class ReposDeleteFileRequestBody:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    author: Optional[ReposDeleteFileRequestBodyAuthor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    committer: Optional[ReposDeleteFileRequestBodyCommitter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committer') }})
    

@dataclass_json
@dataclass
class ReposDeleteFile503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReposDeleteFileRequest:
    path_params: ReposDeleteFilePathParams = field()
    request: Optional[ReposDeleteFileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposDeleteFileResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    file_commit: Optional[shared.FileCommit] = field(default=None)
    repos_delete_file_503_application_json_object: Optional[ReposDeleteFile503ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
