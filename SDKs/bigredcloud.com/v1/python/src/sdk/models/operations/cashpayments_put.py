from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CashPaymentsPutPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashPaymentsPutRequest:
    path_params: CashPaymentsPutPathParams = field(default=None)
    request: shared.CashPaymentDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CashPaymentsPutResponse:
    cash_payments_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
