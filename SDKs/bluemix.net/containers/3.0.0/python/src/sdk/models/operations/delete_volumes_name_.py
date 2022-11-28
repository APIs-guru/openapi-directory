from dataclasses import dataclass, field



@dataclass
class DeleteVolumesNamePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumesNameHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumesNameRequest:
    headers: DeleteVolumesNameHeaders = field()
    path_params: DeleteVolumesNamePathParams = field()
    

@dataclass
class DeleteVolumesNameResponse:
    content_type: str = field()
    status_code: int = field()
    
