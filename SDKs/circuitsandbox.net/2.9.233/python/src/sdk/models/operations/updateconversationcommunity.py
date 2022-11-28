from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateConversationCommunityPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationCommunityRequestBody:
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'description' }})
    topic: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'topic' }})
    

@dataclass
class UpdateConversationCommunitySecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateConversationCommunityRequest:
    path_params: UpdateConversationCommunityPathParams = field()
    security: UpdateConversationCommunitySecurity = field()
    request: Optional[UpdateConversationCommunityRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateConversationCommunityResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
