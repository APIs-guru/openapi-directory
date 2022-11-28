from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVolumesFsNameJSONPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumesFsNameJSONHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumesFsNameJSONRequest:
    headers: GetVolumesFsNameJSONHeaders = field()
    path_params: GetVolumesFsNameJSONPathParams = field()
    

@dataclass
class GetVolumesFsNameJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_fileshare_details: Optional[List[shared.GetFileshareDetails]] = field(default=None)
    
