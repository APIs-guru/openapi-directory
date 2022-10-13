from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class SearchParticipantsToAddPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchParticipantsToAddQueryParams:
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchParticipantsToAddSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchParticipantsToAddRequest:
    path_params: SearchParticipantsToAddPathParams = field(default=None)
    query_params: SearchParticipantsToAddQueryParams = field(default=None)
    security: SearchParticipantsToAddSecurity = field(default=None)
    

@dataclass
class SearchParticipantsToAddResponse:
    add_participants_search_results: Optional[List[Any]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
