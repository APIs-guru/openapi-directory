from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IndividualSubscriptionDeletePathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class IndividualSubscriptionDeleteRequest:
    path_params: IndividualSubscriptionDeletePathParams = field(default=None)
    

@dataclass
class IndividualSubscriptionDeleteResponse:
    content_type: str = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
