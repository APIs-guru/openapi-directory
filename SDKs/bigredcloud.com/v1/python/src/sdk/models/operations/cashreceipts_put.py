from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CashReceiptsPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashReceiptsPutRequest:
    path_params: CashReceiptsPutPathParams = field()
    request: shared.CashReceiptDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CashReceiptsPutResponse:
    content_type: str = field()
    status_code: int = field()
    cash_receipts_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
