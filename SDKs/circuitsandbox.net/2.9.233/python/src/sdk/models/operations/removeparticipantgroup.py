from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class RemoveParticipantGroupPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveParticipantGroupQueryParams:
    participants: List[str] = field(metadata={'query_param': { 'field_name': 'participants', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveParticipantGroupSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveParticipantGroupRequest:
    path_params: RemoveParticipantGroupPathParams = field()
    query_params: RemoveParticipantGroupQueryParams = field()
    security: RemoveParticipantGroupSecurity = field()
    

@dataclass
class RemoveParticipantGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
