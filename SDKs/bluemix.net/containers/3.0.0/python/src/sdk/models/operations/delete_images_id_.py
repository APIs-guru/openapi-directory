from dataclasses import dataclass, field



@dataclass
class DeleteImagesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImagesIDHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImagesIDRequest:
    headers: DeleteImagesIDHeaders = field()
    path_params: DeleteImagesIDPathParams = field()
    

@dataclass
class DeleteImagesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
