from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWebhooksSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWebhooksRequest:
    security: GetWebhooksSecurity = field()
    

@dataclass
class GetWebhooksResponse:
    content_type: str = field()
    status_code: int = field()
    webhooks: Optional[List[shared.Webhook]] = field(default=None)
    
