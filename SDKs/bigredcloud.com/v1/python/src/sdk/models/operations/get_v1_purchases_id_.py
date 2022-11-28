from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1PurchasesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1PurchasesIDRequest:
    path_params: GetV1PurchasesIDPathParams = field()
    

@dataclass
class GetV1PurchasesIDResponse:
    content_type: str = field()
    status_code: int = field()
    purchase_dto: Optional[shared.PurchaseDto] = field(default=None)
    
