from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposListPullRequestsAssociatedWithCommitPathParams:
    commit_sha: str = field(metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListPullRequestsAssociatedWithCommitQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ReposListPullRequestsAssociatedWithCommit415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReposListPullRequestsAssociatedWithCommitRequest:
    path_params: ReposListPullRequestsAssociatedWithCommitPathParams = field()
    query_params: ReposListPullRequestsAssociatedWithCommitQueryParams = field()
    

@dataclass
class ReposListPullRequestsAssociatedWithCommitResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    pull_request_simples: Optional[List[shared.PullRequestSimple]] = field(default=None)
    repos_list_pull_requests_associated_with_commit_415_application_json_object: Optional[ReposListPullRequestsAssociatedWithCommit415ApplicationJSON] = field(default=None)
    
