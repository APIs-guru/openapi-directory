from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubscriptionsGetResponse:
    content_type: str = field()
    status_code: int = field()
    app_pkg_subscription_link_list: Optional[shared.AppPkgSubscriptionLinkList] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
