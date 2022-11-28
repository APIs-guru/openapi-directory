from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdatePortfolioPathParams:
    portfolio_gid: str = field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePortfolioQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UpdatePortfolioRequestBodyInput:
    data: Optional[shared.PortfolioRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class UpdatePortfolio200ApplicationJSON:
    data: Optional[shared.PortfolioResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class UpdatePortfolioRequest:
    path_params: UpdatePortfolioPathParams = field()
    query_params: UpdatePortfolioQueryParams = field()
    request: UpdatePortfolioRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePortfolioResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    update_portfolio_200_application_json_object: Optional[UpdatePortfolio200ApplicationJSON] = field(default=None)
    
