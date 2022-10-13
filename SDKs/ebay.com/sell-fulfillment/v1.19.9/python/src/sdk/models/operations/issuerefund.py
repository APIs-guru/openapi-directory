from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IssueRefundPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssueRefundSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IssueRefundRequest:
    path_params: IssueRefundPathParams = field(default=None)
    request: Optional[shared.IssueRefundRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: IssueRefundSecurity = field(default=None)
    

@dataclass
class IssueRefundResponse:
    content_type: str = field(default=None)
    refund: Optional[shared.Refund] = field(default=None)
    status_code: int = field(default=None)
    
