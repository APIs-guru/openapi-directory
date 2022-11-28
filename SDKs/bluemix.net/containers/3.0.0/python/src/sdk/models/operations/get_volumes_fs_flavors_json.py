from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetVolumesFsFlavorsJSONHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumesFsFlavorsJSONRequest:
    headers: GetVolumesFsFlavorsJSONHeaders = field()
    

@dataclass
class GetVolumesFsFlavorsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_volumes_fs_flavors_json_200_application_json_integers: Optional[List[int]] = field(default=None)
    
