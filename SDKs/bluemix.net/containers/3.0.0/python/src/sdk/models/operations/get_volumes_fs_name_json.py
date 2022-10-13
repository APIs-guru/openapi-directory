from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVolumesFsNameJSONPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumesFsNameJSONHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class GetVolumesFsNameJSONRequest:
    path_params: GetVolumesFsNameJSONPathParams = field(default=None)
    headers: GetVolumesFsNameJSONHeaders = field(default=None)
    

@dataclass
class GetVolumesFsNameJSONResponse:
    content_type: str = field(default=None)
    get_fileshare_details: Optional[List[shared.GetFileshareDetails]] = field(default=None)
    status_code: int = field(default=None)
    
