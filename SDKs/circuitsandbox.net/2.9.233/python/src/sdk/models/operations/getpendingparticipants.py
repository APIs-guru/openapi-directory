from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPendingParticipantsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPendingParticipantsQueryParams:
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    search_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchPointer', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPendingParticipantsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPendingParticipantsRequest:
    path_params: GetPendingParticipantsPathParams = field()
    query_params: GetPendingParticipantsQueryParams = field()
    security: GetPendingParticipantsSecurity = field()
    

@dataclass
class GetPendingParticipantsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    participants_search_result: Optional[Any] = field(default=None)
    
