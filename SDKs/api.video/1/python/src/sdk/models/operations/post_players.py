from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPlayersSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostPlayersRequest:
    request: shared.Playerinput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostPlayersSecurity = field()
    

@dataclass
class PostPlayersResponse:
    content_type: str = field()
    status_code: int = field()
    player: Optional[shared.Player] = field(default=None)
    
