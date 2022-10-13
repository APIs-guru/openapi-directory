from dataclasses import dataclass, field



@dataclass
class PostContainersNameOrIDRenamePathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDRenameQueryParams:
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class PostContainersNameOrIDRenameHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class PostContainersNameOrIDRenameRequest:
    path_params: PostContainersNameOrIDRenamePathParams = field(default=None)
    query_params: PostContainersNameOrIDRenameQueryParams = field(default=None)
    headers: PostContainersNameOrIDRenameHeaders = field(default=None)
    

@dataclass
class PostContainersNameOrIDRenameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
