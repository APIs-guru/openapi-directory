from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddMembersForPortfolioPathParams:
    portfolio_gid: str = field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddMembersForPortfolioQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddMembersForPortfolioRequestBody:
    data: Optional[shared.AddMembersRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddMembersForPortfolio200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddMembersForPortfolioRequest:
    path_params: AddMembersForPortfolioPathParams = field()
    query_params: AddMembersForPortfolioQueryParams = field()
    request: AddMembersForPortfolioRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddMembersForPortfolioResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_members_for_portfolio_200_application_json_object: Optional[AddMembersForPortfolio200ApplicationJSON] = field(default=None)
    
