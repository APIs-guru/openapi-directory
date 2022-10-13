from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CashReceiptsPutPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashReceiptsPutRequest:
    path_params: CashReceiptsPutPathParams = field(default=None)
    request: shared.CashReceiptDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CashReceiptsPutResponse:
    cash_receipts_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
