from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDStartPathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDStartHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDStartRequest:
    headers: PostContainersNameOrIDStartHeaders = field()
    path_params: PostContainersNameOrIDStartPathParams = field()
    

@dataclass
class PostContainersNameOrIDStartResponse:
    content_type: str = field()
    status_code: int = field()
    
