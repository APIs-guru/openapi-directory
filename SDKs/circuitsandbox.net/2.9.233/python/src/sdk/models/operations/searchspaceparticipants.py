from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SearchSpaceParticipantsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchSpaceParticipantsQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchSpaceParticipantsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchSpaceParticipantsRequest:
    path_params: SearchSpaceParticipantsPathParams = field()
    query_params: SearchSpaceParticipantsQueryParams = field()
    security: SearchSpaceParticipantsSecurity = field()
    

@dataclass
class SearchSpaceParticipantsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    participants_search_result_larges: Optional[List[Any]] = field(default=None)
    
