from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposListBranchesForHeadCommitPathParams:
    commit_sha: str = field(metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposListBranchesForHeadCommit415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReposListBranchesForHeadCommitRequest:
    path_params: ReposListBranchesForHeadCommitPathParams = field()
    

@dataclass
class ReposListBranchesForHeadCommitResponse:
    content_type: str = field()
    status_code: int = field()
    branch_shorts: Optional[List[shared.BranchShort]] = field(default=None)
    repos_list_branches_for_head_commit_415_application_json_object: Optional[ReposListBranchesForHeadCommit415ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
