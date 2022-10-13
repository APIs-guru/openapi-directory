from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdateMediaAffinityIntentHandlingHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    request_timeout: float = field(default=None, metadata={'header': { 'field_name': 'Request-Timeout' }})
    user_agent: str = field(default=None, metadata={'header': { 'field_name': 'User-Agent' }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count' }})
    x_applecloudextension_session_id: str = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-session-id' }})
    

@dataclass
class UpdateMediaAffinityIntentHandlingRequest:
    headers: UpdateMediaAffinityIntentHandlingHeaders = field(default=None)
    request: Optional[List[shared.UpdateMediaAffinityIntentHandlingInvocation]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMediaAffinityIntentHandlingResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_media_affinity_intent_handling_invocation_responses: Optional[List[Any]] = field(default=None)
    
