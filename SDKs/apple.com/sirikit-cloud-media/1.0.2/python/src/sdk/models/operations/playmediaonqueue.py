from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PlayMediaOnQueueHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    user_agent: str = field(default=None, metadata={'header': { 'field_name': 'User-Agent' }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count' }})
    x_applecloudextension_session_id: str = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-session-id' }})
    

@dataclass
class PlayMediaOnQueueRequest:
    headers: PlayMediaOnQueueHeaders = field(default=None)
    request: Optional[shared.PlayMediaRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PlayMediaOnQueueResponse:
    content_type: str = field(default=None)
    queue: Optional[shared.Queue] = field(default=None)
    status_code: int = field(default=None)
    
