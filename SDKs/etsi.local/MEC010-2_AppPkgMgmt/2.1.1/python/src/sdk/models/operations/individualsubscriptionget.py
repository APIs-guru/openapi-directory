from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IndividualSubscriptionGetPathParams:
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class IndividualSubscriptionGetRequest:
    path_params: IndividualSubscriptionGetPathParams = field()
    

@dataclass
class IndividualSubscriptionGetResponse:
    content_type: str = field()
    status_code: int = field()
    app_pkg_subscription_info: Optional[shared.AppPkgSubscriptionInfo] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
