from dataclasses import dataclass, field



@dataclass
class ReposDeleteDeployKeyPathParams:
    key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteDeployKeyRequest:
    path_params: ReposDeleteDeployKeyPathParams = field(default=None)
    

@dataclass
class ReposDeleteDeployKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
