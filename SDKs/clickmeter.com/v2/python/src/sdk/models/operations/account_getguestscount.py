from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountGetGuestsCountQueryParams:
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    

@dataclass
class AccountGetGuestsCountRequest:
    query_params: AccountGetGuestsCountQueryParams = field()
    

@dataclass
class AccountGetGuestsCountResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_count_responce: Optional[shared.APICoreResponsesCountResponce] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
