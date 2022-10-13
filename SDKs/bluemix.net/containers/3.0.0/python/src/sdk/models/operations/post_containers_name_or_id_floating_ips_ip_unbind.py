from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDFloatingIpsIPUnbindPathParams:
    ip: str = field(default=None, metadata={'path_param': { 'field_name': 'ip', 'style': 'simple', 'explode': False }})
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDFloatingIpsIPUnbindHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class PostContainersNameOrIDFloatingIpsIPUnbindRequest:
    path_params: PostContainersNameOrIDFloatingIpsIPUnbindPathParams = field(default=None)
    headers: PostContainersNameOrIDFloatingIpsIPUnbindHeaders = field(default=None)
    

@dataclass
class PostContainersNameOrIDFloatingIpsIPUnbindResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
