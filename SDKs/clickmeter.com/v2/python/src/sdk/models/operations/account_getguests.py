from dataclasses import dataclass, field
from typing import Enum,Optional
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
    query_params: AccountGetGuestsQueryParams = field(default=None)
    

@dataclass
class AccountGetGuestsResponse:
    api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
