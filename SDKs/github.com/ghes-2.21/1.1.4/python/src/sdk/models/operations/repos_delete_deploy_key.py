from dataclasses import dataclass, field



@dataclass
class ReposDeleteDeployKeyPathParams:
    key_id: int = field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteDeployKeyRequest:
    path_params: ReposDeleteDeployKeyPathParams = field()
    

@dataclass
class ReposDeleteDeployKeyResponse:
    content_type: str = field()
    status_code: int = field()
    
