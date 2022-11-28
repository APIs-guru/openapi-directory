from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostVolumesFsCreateHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVolumesFsCreateRequest:
    headers: PostVolumesFsCreateHeaders = field()
    request: shared.FileshareParam = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVolumesFsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    
