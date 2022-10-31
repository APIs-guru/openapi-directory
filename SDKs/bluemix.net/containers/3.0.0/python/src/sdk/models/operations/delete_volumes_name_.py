from dataclasses import dataclass, field



@dataclass
class DeleteVolumesNamePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumesNameHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumesNameRequest:
    path_params: DeleteVolumesNamePathParams = field(default=None)
    headers: DeleteVolumesNameHeaders = field(default=None)
    

@dataclass
class DeleteVolumesNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
