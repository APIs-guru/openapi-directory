from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PullsMergePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class PullsMergeRequestBodyMergeMethodEnum(str, Enum):
    MERGE = "merge"
    SQUASH = "squash"
    REBASE = "rebase"


@dataclass_json
@dataclass
class PullsMergeRequestBody:
    commit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_message') }})
    commit_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_title') }})
    merge_method: Optional[PullsMergeRequestBodyMergeMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merge_method') }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    

@dataclass_json
@dataclass
class PullsMerge405ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PullsMerge409ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PullsMergeRequest:
    path_params: PullsMergePathParams = field()
    request: Optional[PullsMergeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsMergeResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request_merge_result: Optional[shared.PullRequestMergeResult] = field(default=None)
    pulls_merge_405_application_json_object: Optional[PullsMerge405ApplicationJSON] = field(default=None)
    pulls_merge_409_application_json_object: Optional[PullsMerge409ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
