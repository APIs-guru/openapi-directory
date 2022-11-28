from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposUpdatePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposUpdateRequestBodyVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"
    VISIBILITY = "visibility"
    INTERNAL = "internal"


@dataclass_json
@dataclass
class ReposUpdateRequestBody:
    allow_merge_commit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_merge_commit') }})
    allow_rebase_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_rebase_merge') }})
    allow_squash_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_squash_merge') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    default_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_branch') }})
    delete_branch_on_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete_branch_on_merge') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    has_issues: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_issues') }})
    has_projects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_projects') }})
    has_wiki: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_wiki') }})
    homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    is_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_template') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    visibility: Optional[ReposUpdateRequestBodyVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclass
class ReposUpdateRequest:
    path_params: ReposUpdatePathParams = field()
    request: Optional[ReposUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    full_repository: Optional[shared.FullRepository] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
