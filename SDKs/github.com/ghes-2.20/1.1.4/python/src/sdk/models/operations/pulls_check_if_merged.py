from dataclasses import dataclass, field



@dataclass
class PullsCheckIfMergedPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class PullsCheckIfMergedRequest:
    path_params: PullsCheckIfMergedPathParams = field(default=None)
    

@dataclass
class PullsCheckIfMergedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
