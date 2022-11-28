from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddItemForPortfolioPathParams:
    portfolio_gid: str = field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddItemForPortfolioQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddItemForPortfolioRequestBody:
    data: Optional[shared.PortfolioAddItemRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddItemForPortfolio200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddItemForPortfolioRequest:
    path_params: AddItemForPortfolioPathParams = field()
    query_params: AddItemForPortfolioQueryParams = field()
    request: AddItemForPortfolioRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddItemForPortfolioResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_item_for_portfolio_200_application_json_object: Optional[AddItemForPortfolio200ApplicationJSON] = field(default=None)
    
