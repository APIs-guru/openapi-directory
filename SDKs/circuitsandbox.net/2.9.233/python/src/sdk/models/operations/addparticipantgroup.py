from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class AddParticipantGroupPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddParticipantGroupRequestBody:
    participants: List[str] = field(default=None, metadata={'form': { 'field_name': 'participants' }})
    

@dataclass
class AddParticipantGroupSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddParticipantGroupRequest:
    path_params: AddParticipantGroupPathParams = field(default=None)
    request: AddParticipantGroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddParticipantGroupSecurity = field(default=None)
    

@dataclass
class AddParticipantGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
