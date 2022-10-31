from dataclasses import dataclass, field



@dataclass
class DeleteVolumesFsNamePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumesFsNameHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumesFsNameRequest:
    path_params: DeleteVolumesFsNamePathParams = field(default=None)
    headers: DeleteVolumesFsNameHeaders = field(default=None)
    

@dataclass
class DeleteVolumesFsNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
