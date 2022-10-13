from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVolumesFsJSONHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class GetVolumesFsJSONRequest:
    headers: GetVolumesFsJSONHeaders = field(default=None)
    

@dataclass
class GetVolumesFsJSONResponse:
    content_type: str = field(default=None)
    fileshares: Optional[List[shared.Fileshare]] = field(default=None)
    status_code: int = field(default=None)
    
