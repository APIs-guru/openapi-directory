from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RemoveItemForPortfolioPathParams:
    portfolio_gid: str = field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveItemForPortfolioQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveItemForPortfolioRequestBody:
    data: Optional[shared.PortfolioRemoveItemRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class RemoveItemForPortfolio200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class RemoveItemForPortfolioRequest:
    path_params: RemoveItemForPortfolioPathParams = field()
    query_params: RemoveItemForPortfolioQueryParams = field()
    request: RemoveItemForPortfolioRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveItemForPortfolioResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    remove_item_for_portfolio_200_application_json_object: Optional[RemoveItemForPortfolio200ApplicationJSON] = field(default=None)
    
