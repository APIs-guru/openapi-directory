from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateActivityOnQueueHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    user_agent: str = field(default=None, metadata={'header': { 'field_name': 'User-Agent' }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count' }})
    x_applecloudextension_session_id: str = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-session-id' }})
    

@dataclass
class UpdateActivityOnQueueRequest:
    headers: UpdateActivityOnQueueHeaders = field(default=None)
    request: Optional[shared.UpdateActivityRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateActivityOnQueueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_activity_response: Optional[shared.UpdateActivityResponse] = field(default=None)
    
