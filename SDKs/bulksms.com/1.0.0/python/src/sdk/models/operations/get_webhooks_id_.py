from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhooksIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksIDRequest:
    path_params: GetWebhooksIDPathParams = field()
    

@dataclass
class GetWebhooksIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
