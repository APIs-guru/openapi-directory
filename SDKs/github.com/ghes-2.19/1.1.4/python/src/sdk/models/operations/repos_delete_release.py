from dataclasses import dataclass, field



@dataclass
class ReposDeleteReleasePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = field(default=None, metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteReleaseRequest:
    path_params: ReposDeleteReleasePathParams = field(default=None)
    

@dataclass
class ReposDeleteReleaseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
