from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetParticipantsByConvIDPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    
class GetParticipantsByConvIDTypeEnum(str, Enum):
    REGULAR = "REGULAR"
    MODERATOR = "MODERATOR"
    GUEST = "GUEST"
    FORMER = "FORMER"
    BOT = "BOT"


@dataclass
class GetParticipantsByConvIDQueryParams:
    page_size: float = field(metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    search_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchPointer', 'style': 'form', 'explode': True }})
    type: Optional[GetParticipantsByConvIDTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetParticipantsByConvIDSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetParticipantsByConvIDRequest:
    path_params: GetParticipantsByConvIDPathParams = field()
    query_params: GetParticipantsByConvIDQueryParams = field()
    security: GetParticipantsByConvIDSecurity = field()
    

@dataclass
class GetParticipantsByConvIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation_participants_lists: Optional[List[Any]] = field(default=None)
    
