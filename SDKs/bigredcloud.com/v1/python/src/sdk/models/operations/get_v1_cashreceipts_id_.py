from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1CashReceiptsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1CashReceiptsIDRequest:
    path_params: GetV1CashReceiptsIDPathParams = field(default=None)
    

@dataclass
class GetV1CashReceiptsIDResponse:
    cash_receipt_dto: Optional[shared.CashReceiptDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
