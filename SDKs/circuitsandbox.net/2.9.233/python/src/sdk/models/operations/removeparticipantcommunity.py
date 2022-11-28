from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class RemoveParticipantCommunityPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveParticipantCommunityQueryParams:
    participants: List[str] = field(metadata={'query_param': { 'field_name': 'participants', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveParticipantCommunitySecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveParticipantCommunityRequest:
    path_params: RemoveParticipantCommunityPathParams = field()
    query_params: RemoveParticipantCommunityQueryParams = field()
    security: RemoveParticipantCommunitySecurity = field()
    

@dataclass
class RemoveParticipantCommunityResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
