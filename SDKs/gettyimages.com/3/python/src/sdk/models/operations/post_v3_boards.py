from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV3BoardsRequest:
    request: Optional[shared.BoardInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV3BoardsResponse:
    board_created: Optional[shared.BoardCreated] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
