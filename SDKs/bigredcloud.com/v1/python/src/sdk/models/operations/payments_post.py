from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PaymentsPostRequest:
    request: shared.PaymentDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentsPostResponse:
    content_type: str = field()
    status_code: int = field()
    payments_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
