from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitGetCommitPathParams:
    commit_sha: str = field(metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitGetCommitRequest:
    path_params: GitGetCommitPathParams = field()
    

@dataclass
class GitGetCommitResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    git_commit: Optional[shared.GitCommit] = field(default=None)
    
