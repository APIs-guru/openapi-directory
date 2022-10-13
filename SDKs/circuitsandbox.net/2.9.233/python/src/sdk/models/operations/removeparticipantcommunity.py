from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class RemoveParticipantCommunityPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveParticipantCommunityQueryParams:
    participants: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'participants', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveParticipantCommunitySecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveParticipantCommunityRequest:
    path_params: RemoveParticipantCommunityPathParams = field(default=None)
    query_params: RemoveParticipantCommunityQueryParams = field(default=None)
    security: RemoveParticipantCommunitySecurity = field(default=None)
    

@dataclass
class RemoveParticipantCommunityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
