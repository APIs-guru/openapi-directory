from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPortfoliosQueryParams:
    owner: str = field(metadata={'query_param': { 'field_name': 'owner', 'style': 'form', 'explode': True }})
    workspace: str = field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetPortfolios200ApplicationJSON:
    data: Optional[List[shared.PortfolioCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetPortfoliosRequest:
    query_params: GetPortfoliosQueryParams = field()
    

@dataclass
class GetPortfoliosResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_portfolios_200_application_json_object: Optional[GetPortfolios200ApplicationJSON] = field(default=None)
    
