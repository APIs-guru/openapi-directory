from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateActivityOnQueueHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    user_agent: str = field(default=None, metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateActivityOnQueueRequest:
    headers: UpdateActivityOnQueueHeaders = field(default=None)
    request: Optional[shared.UpdateActivityRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateActivityOnQueueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_activity_response: Optional[shared.UpdateActivityResponse] = field(default=None)
    
