from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVolumesFsJSONHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumesFsJSONRequest:
    headers: GetVolumesFsJSONHeaders = field()
    

@dataclass
class GetVolumesFsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    fileshares: Optional[List[shared.Fileshare]] = field(default=None)
    
