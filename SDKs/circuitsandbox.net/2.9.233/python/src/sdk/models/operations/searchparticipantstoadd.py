from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SearchParticipantsToAddPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchParticipantsToAddQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchParticipantsToAddSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchParticipantsToAddRequest:
    path_params: SearchParticipantsToAddPathParams = field()
    query_params: SearchParticipantsToAddQueryParams = field()
    security: SearchParticipantsToAddSecurity = field()
    

@dataclass
class SearchParticipantsToAddResponse:
    content_type: str = field()
    status_code: int = field()
    add_participants_search_results: Optional[List[Any]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
