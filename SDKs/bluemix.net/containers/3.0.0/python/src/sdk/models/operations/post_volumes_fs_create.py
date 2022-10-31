from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostVolumesFsCreateHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVolumesFsCreateRequest:
    headers: PostVolumesFsCreateHeaders = field(default=None)
    request: shared.FileshareParam = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVolumesFsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
