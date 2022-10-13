from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDUnpausePathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDUnpauseHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class PostContainersNameOrIDUnpauseRequest:
    path_params: PostContainersNameOrIDUnpausePathParams = field(default=None)
    headers: PostContainersNameOrIDUnpauseHeaders = field(default=None)
    

@dataclass
class PostContainersNameOrIDUnpauseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
