from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreateOrUpdateFileContentsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateOrUpdateFileContentsRequestBodyAuthor:
    r"""ReposCreateOrUpdateFileContentsRequestBodyAuthor
    The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
    """
    
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    

@dataclass_json
@dataclass
class ReposCreateOrUpdateFileContentsRequestBodyCommitter:
    r"""ReposCreateOrUpdateFileContentsRequestBodyCommitter
    The person that committed the file. Default: the authenticated user.
    """
    
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    

@dataclass_json
@dataclass
class ReposCreateOrUpdateFileContentsRequestBody:
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    author: Optional[ReposCreateOrUpdateFileContentsRequestBodyAuthor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    committer: Optional[ReposCreateOrUpdateFileContentsRequestBodyCommitter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committer') }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    

@dataclass
class ReposCreateOrUpdateFileContentsRequest:
    path_params: ReposCreateOrUpdateFileContentsPathParams = field()
    request: Optional[ReposCreateOrUpdateFileContentsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateOrUpdateFileContentsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    file_commit: Optional[shared.FileCommit] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
