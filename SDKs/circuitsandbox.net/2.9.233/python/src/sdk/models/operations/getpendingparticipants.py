from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPendingParticipantsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPendingParticipantsQueryParams:
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    search_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchPointer', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPendingParticipantsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPendingParticipantsRequest:
    path_params: GetPendingParticipantsPathParams = field(default=None)
    query_params: GetPendingParticipantsQueryParams = field(default=None)
    security: GetPendingParticipantsSecurity = field(default=None)
    

@dataclass
class GetPendingParticipantsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    participants_search_result: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
