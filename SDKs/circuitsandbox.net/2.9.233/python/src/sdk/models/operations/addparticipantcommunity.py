from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class AddParticipantCommunityPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddParticipantCommunityRequestBody:
    participants: List[str] = field(metadata={'form': { 'field_name': 'participants' }})
    

@dataclass
class AddParticipantCommunitySecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddParticipantCommunityRequest:
    path_params: AddParticipantCommunityPathParams = field()
    request: AddParticipantCommunityRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddParticipantCommunitySecurity = field()
    

@dataclass
class AddParticipantCommunityResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
