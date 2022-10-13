from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SubscriptionsGetResponse:
    app_pkg_subscription_link_list: Optional[shared.AppPkgSubscriptionLinkList] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
