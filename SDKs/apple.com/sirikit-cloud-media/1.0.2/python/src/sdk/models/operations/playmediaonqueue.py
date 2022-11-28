from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PlayMediaOnQueueHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    user_agent: str = field(metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = field(metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayMediaOnQueueRequest:
    headers: PlayMediaOnQueueHeaders = field()
    request: Optional[shared.PlayMediaRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PlayMediaOnQueueResponse:
    content_type: str = field()
    status_code: int = field()
    queue: Optional[shared.Queue] = field(default=None)
    
