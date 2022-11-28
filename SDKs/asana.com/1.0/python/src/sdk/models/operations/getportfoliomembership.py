from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPortfolioMembershipPathParams:
    portfolio_membership_gid: str = field(metadata={'path_param': { 'field_name': 'portfolio_membership_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPortfolioMembershipQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetPortfolioMembership200ApplicationJSON:
    data: Optional[shared.PortfolioMembershipResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetPortfolioMembershipRequest:
    path_params: GetPortfolioMembershipPathParams = field()
    query_params: GetPortfolioMembershipQueryParams = field()
    

@dataclass
class GetPortfolioMembershipResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_portfolio_membership_200_application_json_object: Optional[GetPortfolioMembership200ApplicationJSON] = field(default=None)
    
