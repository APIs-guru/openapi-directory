from dataclasses import dataclass, field



@dataclass
class PostContainersFloatingIpsIPReleasePathParams:
    ip: str = field(metadata={'path_param': { 'field_name': 'ip', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersFloatingIpsIPReleaseHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersFloatingIpsIPReleaseRequest:
    headers: PostContainersFloatingIpsIPReleaseHeaders = field()
    path_params: PostContainersFloatingIpsIPReleasePathParams = field()
    

@dataclass
class PostContainersFloatingIpsIPReleaseResponse:
    content_type: str = field()
    status_code: int = field()
    
