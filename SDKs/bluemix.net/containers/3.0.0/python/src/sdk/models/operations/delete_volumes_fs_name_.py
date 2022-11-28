from dataclasses import dataclass, field



@dataclass
class DeleteVolumesFsNamePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumesFsNameHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumesFsNameRequest:
    headers: DeleteVolumesFsNameHeaders = field()
    path_params: DeleteVolumesFsNamePathParams = field()
    

@dataclass
class DeleteVolumesFsNameResponse:
    content_type: str = field()
    status_code: int = field()
    
