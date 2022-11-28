from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDUnpausePathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDUnpauseHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDUnpauseRequest:
    headers: PostContainersNameOrIDUnpauseHeaders = field()
    path_params: PostContainersNameOrIDUnpausePathParams = field()
    

@dataclass
class PostContainersNameOrIDUnpauseResponse:
    content_type: str = field()
    status_code: int = field()
    
