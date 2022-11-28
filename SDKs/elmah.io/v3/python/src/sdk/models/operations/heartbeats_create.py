from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class HeartbeatsCreatePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    log_id: str = field(metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class HeartbeatsCreateRequests:
    create_heartbeat: Optional[shared.CreateHeartbeat] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_heartbeat1: Optional[shared.CreateHeartbeat] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_heartbeat2: Optional[shared.CreateHeartbeat] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    create_heartbeat3: Optional[shared.CreateHeartbeat] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class HeartbeatsCreateRequest:
    path_params: HeartbeatsCreatePathParams = field()
    request: Optional[HeartbeatsCreateRequests] = field(default=None)
    

@dataclass
class HeartbeatsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    
