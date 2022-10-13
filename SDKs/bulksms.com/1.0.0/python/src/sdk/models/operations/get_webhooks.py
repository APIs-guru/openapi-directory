from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWebhooksSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWebhooksRequest:
    security: GetWebhooksSecurity = field(default=None)
    

@dataclass
class GetWebhooksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhooks: Optional[List[shared.Webhook]] = field(default=None)
    
