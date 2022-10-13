from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IndividualSubscriptionGetPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class IndividualSubscriptionGetRequest:
    path_params: IndividualSubscriptionGetPathParams = field(default=None)
    

@dataclass
class IndividualSubscriptionGetResponse:
    app_pkg_subscription_info: Optional[shared.AppPkgSubscriptionInfo] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
