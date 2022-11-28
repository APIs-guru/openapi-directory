from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CashPaymentsPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashPaymentsPutRequest:
    path_params: CashPaymentsPutPathParams = field()
    request: shared.CashPaymentDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CashPaymentsPutResponse:
    content_type: str = field()
    status_code: int = field()
    cash_payments_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
