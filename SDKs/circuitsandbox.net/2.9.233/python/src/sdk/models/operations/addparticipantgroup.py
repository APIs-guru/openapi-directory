from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class AddParticipantGroupPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddParticipantGroupRequestBody:
    participants: List[str] = field(metadata={'form': { 'field_name': 'participants' }})
    

@dataclass
class AddParticipantGroupSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddParticipantGroupRequest:
    path_params: AddParticipantGroupPathParams = field()
    request: AddParticipantGroupRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddParticipantGroupSecurity = field()
    

@dataclass
class AddParticipantGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
