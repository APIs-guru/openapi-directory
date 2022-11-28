from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDPausePathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDPauseHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDPauseRequest:
    headers: PostContainersNameOrIDPauseHeaders = field()
    path_params: PostContainersNameOrIDPausePathParams = field()
    

@dataclass
class PostContainersNameOrIDPauseResponse:
    content_type: str = field()
    status_code: int = field()
    
