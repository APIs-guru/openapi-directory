from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddCustomFieldSettingForPortfolioPathParams:
    portfolio_gid: str = field(metadata={'path_param': { 'field_name': 'portfolio_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddCustomFieldSettingForPortfolioQueryParams:
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddCustomFieldSettingForPortfolioRequestBody:
    data: Optional[shared.AddCustomFieldSettingRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddCustomFieldSettingForPortfolio200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddCustomFieldSettingForPortfolioRequest:
    path_params: AddCustomFieldSettingForPortfolioPathParams = field()
    query_params: AddCustomFieldSettingForPortfolioQueryParams = field()
    request: AddCustomFieldSettingForPortfolioRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddCustomFieldSettingForPortfolioResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_custom_field_setting_for_portfolio_200_application_json_object: Optional[AddCustomFieldSettingForPortfolio200ApplicationJSON] = field(default=None)
    
