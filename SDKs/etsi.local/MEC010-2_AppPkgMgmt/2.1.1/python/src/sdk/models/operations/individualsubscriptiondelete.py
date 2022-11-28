from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IndividualSubscriptionDeletePathParams:
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class IndividualSubscriptionDeleteRequest:
    path_params: IndividualSubscriptionDeletePathParams = field()
    

@dataclass
class IndividualSubscriptionDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
