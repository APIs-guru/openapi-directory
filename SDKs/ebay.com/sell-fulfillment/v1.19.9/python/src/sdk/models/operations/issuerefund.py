from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IssueRefundPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssueRefundSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IssueRefundRequest:
    path_params: IssueRefundPathParams = field()
    security: IssueRefundSecurity = field()
    request: Optional[shared.IssueRefundRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssueRefundResponse:
    content_type: str = field()
    status_code: int = field()
    refund: Optional[shared.Refund] = field(default=None)
    
