from dataclasses import dataclass, field



@dataclass
class ReposDeleteReleasePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = field(metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteReleaseRequest:
    path_params: ReposDeleteReleasePathParams = field()
    

@dataclass
class ReposDeleteReleaseResponse:
    content_type: str = field()
    status_code: int = field()
    
