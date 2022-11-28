from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateActivityOnQueueHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    user_agent: str = field(metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = field(metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateActivityOnQueueRequest:
    headers: UpdateActivityOnQueueHeaders = field()
    request: Optional[shared.UpdateActivityRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateActivityOnQueueResponse:
    content_type: str = field()
    status_code: int = field()
    update_activity_response: Optional[shared.UpdateActivityResponse] = field(default=None)
    
