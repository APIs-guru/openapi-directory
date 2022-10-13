from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class GetParticipantsByConvIDPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    
class GetParticipantsByConvIDTypeEnum(str, Enum):
    REGULAR = "REGULAR"
    MODERATOR = "MODERATOR"
    GUEST = "GUEST"
    FORMER = "FORMER"
    BOT = "BOT"


@dataclass
class GetParticipantsByConvIDQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page_size: float = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    search_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchPointer', 'style': 'form', 'explode': True }})
    type: Optional[GetParticipantsByConvIDTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetParticipantsByConvIDSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetParticipantsByConvIDRequest:
    path_params: GetParticipantsByConvIDPathParams = field(default=None)
    query_params: GetParticipantsByConvIDQueryParams = field(default=None)
    security: GetParticipantsByConvIDSecurity = field(default=None)
    

@dataclass
class GetParticipantsByConvIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation_participants_lists: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
