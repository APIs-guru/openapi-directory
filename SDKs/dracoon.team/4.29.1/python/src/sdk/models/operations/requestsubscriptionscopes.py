from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestSubscriptionScopesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    notification_scope_list: Optional[shared.NotificationScopeList] = field(default=None)
    
