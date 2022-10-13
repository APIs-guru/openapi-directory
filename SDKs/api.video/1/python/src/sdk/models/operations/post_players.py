from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPlayersSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostPlayersRequest:
    request: shared.Playerinput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostPlayersSecurity = field(default=None)
    

@dataclass
class PostPlayersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    player: Optional[shared.Player] = field(default=None)
    
