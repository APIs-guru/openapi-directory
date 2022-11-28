from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PaymentsPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PaymentsPutRequest:
    path_params: PaymentsPutPathParams = field()
    request: shared.PaymentDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentsPutResponse:
    content_type: str = field()
    status_code: int = field()
    payments_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
