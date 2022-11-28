from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDRenamePathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDRenameQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class PostContainersNameOrIDRenameHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDRenameRequest:
    headers: PostContainersNameOrIDRenameHeaders = field()
    path_params: PostContainersNameOrIDRenamePathParams = field()
    query_params: PostContainersNameOrIDRenameQueryParams = field()
    

@dataclass
class PostContainersNameOrIDRenameResponse:
    content_type: str = field()
    status_code: int = field()
    
