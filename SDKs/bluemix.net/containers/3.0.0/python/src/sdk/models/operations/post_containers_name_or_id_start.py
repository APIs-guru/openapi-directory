from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDStartPathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDStartHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDStartRequest:
    path_params: PostContainersNameOrIDStartPathParams = field(default=None)
    headers: PostContainersNameOrIDStartHeaders = field(default=None)
    

@dataclass
class PostContainersNameOrIDStartResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
