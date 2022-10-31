from dataclasses import dataclass, field



@dataclass
class DeleteImagesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImagesIDHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImagesIDRequest:
    path_params: DeleteImagesIDPathParams = field(default=None)
    headers: DeleteImagesIDHeaders = field(default=None)
    

@dataclass
class DeleteImagesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
