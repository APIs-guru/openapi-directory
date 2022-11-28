from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdateMediaAffinityIntentHandlingHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    request_timeout: float = field(metadata={'header': { 'field_name': 'Request-Timeout', 'style': 'simple', 'explode': False }})
    user_agent: str = field(metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = field(metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMediaAffinityIntentHandlingRequest:
    headers: UpdateMediaAffinityIntentHandlingHeaders = field()
    request: Optional[List[shared.UpdateMediaAffinityIntentHandlingInvocation]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMediaAffinityIntentHandlingResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    update_media_affinity_intent_handling_invocation_responses: Optional[List[Any]] = field(default=None)
    
