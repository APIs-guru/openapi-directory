from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposListPullRequestsAssociatedWithCommitPathParams:
    commit_sha: str = field(default=None, metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListPullRequestsAssociatedWithCommitQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListPullRequestsAssociatedWithCommitRequest:
    path_params: ReposListPullRequestsAssociatedWithCommitPathParams = field(default=None)
    query_params: ReposListPullRequestsAssociatedWithCommitQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ReposListPullRequestsAssociatedWithCommit415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ReposListPullRequestsAssociatedWithCommitResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    pull_request_simples: Optional[List[shared.PullRequestSimple]] = field(default=None)
    repos_list_pull_requests_associated_with_commit_415_application_json_object: Optional[ReposListPullRequestsAssociatedWithCommit415ApplicationJSON] = field(default=None)
    
