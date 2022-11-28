from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateConversationGroupPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationGroupRequestBody:
    topic: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'topic' }})
    

@dataclass
class UpdateConversationGroupSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateConversationGroupRequest:
    path_params: UpdateConversationGroupPathParams = field()
    security: UpdateConversationGroupSecurity = field()
    request: Optional[UpdateConversationGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateConversationGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
