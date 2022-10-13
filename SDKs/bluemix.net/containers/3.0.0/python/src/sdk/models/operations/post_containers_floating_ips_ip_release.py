from dataclasses import dataclass, field



@dataclass
class PostContainersFloatingIpsIPReleasePathParams:
    ip: str = field(default=None, metadata={'path_param': { 'field_name': 'ip', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersFloatingIpsIPReleaseHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class PostContainersFloatingIpsIPReleaseRequest:
    path_params: PostContainersFloatingIpsIPReleasePathParams = field(default=None)
    headers: PostContainersFloatingIpsIPReleaseHeaders = field(default=None)
    

@dataclass
class PostContainersFloatingIpsIPReleaseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
