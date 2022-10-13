from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class SearchSpaceParticipantsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchSpaceParticipantsQueryParams:
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchSpaceParticipantsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchSpaceParticipantsRequest:
    path_params: SearchSpaceParticipantsPathParams = field(default=None)
    query_params: SearchSpaceParticipantsQueryParams = field(default=None)
    security: SearchSpaceParticipantsSecurity = field(default=None)
    

@dataclass
class SearchSpaceParticipantsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    participants_search_result_larges: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
