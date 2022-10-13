from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposListBranchesForHeadCommitPathParams:
    commit_sha: str = field(default=None, metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListBranchesForHeadCommitRequest:
    path_params: ReposListBranchesForHeadCommitPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ReposListBranchesForHeadCommit415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ReposListBranchesForHeadCommitResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    branch_shorts: Optional[List[shared.BranchShort]] = field(default=None)
    repos_list_branches_for_head_commit_415_application_json_object: Optional[ReposListBranchesForHeadCommit415ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
