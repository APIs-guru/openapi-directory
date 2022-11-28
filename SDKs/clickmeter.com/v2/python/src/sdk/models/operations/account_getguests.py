from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class AccountGetGuestsSortDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class AccountGetGuestsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_direction: Optional[AccountGetGuestsSortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortDirection', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    

@dataclass
class AccountGetGuestsRequest:
    query_params: AccountGetGuestsQueryParams = field()
    

@dataclass
class AccountGetGuestsResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64] = field(default=None)
    
