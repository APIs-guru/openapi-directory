from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PlayMediaIntentHandlingHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    request_timeout: float = field(default=None, metadata={'header': { 'field_name': 'Request-Timeout', 'style': 'simple', 'explode': False }})
    user_agent: str = field(default=None, metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayMediaIntentHandlingRequest:
    headers: PlayMediaIntentHandlingHeaders = field(default=None)
    request: Optional[List[shared.PlayMediaIntentHandlingInvocation]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PlayMediaIntentHandlingResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    play_media_intent_handling_invocation_responses: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
