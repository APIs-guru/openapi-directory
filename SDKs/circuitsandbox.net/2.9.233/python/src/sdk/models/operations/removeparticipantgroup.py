from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class RemoveParticipantGroupPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveParticipantGroupQueryParams:
    participants: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'participants', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveParticipantGroupSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveParticipantGroupRequest:
    path_params: RemoveParticipantGroupPathParams = field(default=None)
    query_params: RemoveParticipantGroupQueryParams = field(default=None)
    security: RemoveParticipantGroupSecurity = field(default=None)
    

@dataclass
class RemoveParticipantGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
