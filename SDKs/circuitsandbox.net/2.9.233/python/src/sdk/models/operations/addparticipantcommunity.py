from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class AddParticipantCommunityPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddParticipantCommunityRequestBody:
    participants: List[str] = field(default=None, metadata={'form': { 'field_name': 'participants' }})
    

@dataclass
class AddParticipantCommunitySecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddParticipantCommunityRequest:
    path_params: AddParticipantCommunityPathParams = field(default=None)
    request: AddParticipantCommunityRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddParticipantCommunitySecurity = field(default=None)
    

@dataclass
class AddParticipantCommunityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
