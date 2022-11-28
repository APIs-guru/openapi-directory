from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDFloatingIpsIPBindPathParams:
    ip: str = field(metadata={'path_param': { 'field_name': 'ip', 'style': 'simple', 'explode': False }})
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDFloatingIpsIPBindHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDFloatingIpsIPBindRequest:
    headers: PostContainersNameOrIDFloatingIpsIPBindHeaders = field()
    path_params: PostContainersNameOrIDFloatingIpsIPBindPathParams = field()
    

@dataclass
class PostContainersNameOrIDFloatingIpsIPBindResponse:
    content_type: str = field()
    status_code: int = field()
    
