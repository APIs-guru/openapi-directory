from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDPausePathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDPauseHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class PostContainersNameOrIDPauseRequest:
    path_params: PostContainersNameOrIDPausePathParams = field(default=None)
    headers: PostContainersNameOrIDPauseHeaders = field(default=None)
    

@dataclass
class PostContainersNameOrIDPauseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
