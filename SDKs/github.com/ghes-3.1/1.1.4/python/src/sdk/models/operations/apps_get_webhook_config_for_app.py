from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetWebhookConfigForAppResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhook_config: Optional[shared.WebhookConfig] = field(default=None)
    
