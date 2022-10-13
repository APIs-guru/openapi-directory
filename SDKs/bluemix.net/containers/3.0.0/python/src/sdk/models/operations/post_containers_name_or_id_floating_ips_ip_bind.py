from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDFloatingIpsIPBindPathParams:
    ip: str = field(default=None, metadata={'path_param': { 'field_name': 'ip', 'style': 'simple', 'explode': False }})
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDFloatingIpsIPBindHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class PostContainersNameOrIDFloatingIpsIPBindRequest:
    path_params: PostContainersNameOrIDFloatingIpsIPBindPathParams = field(default=None)
    headers: PostContainersNameOrIDFloatingIpsIPBindHeaders = field(default=None)
    

@dataclass
class PostContainersNameOrIDFloatingIpsIPBindResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
