from dataclasses import dataclass, field



@dataclass
class PullsCheckIfMergedPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class PullsCheckIfMergedRequest:
    path_params: PullsCheckIfMergedPathParams = field()
    

@dataclass
class PullsCheckIfMergedResponse:
    content_type: str = field()
    status_code: int = field()
    
