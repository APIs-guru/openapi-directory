from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1PurchasesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1PurchasesIDRequest:
    path_params: GetV1PurchasesIDPathParams = field(default=None)
    

@dataclass
class GetV1PurchasesIDResponse:
    content_type: str = field(default=None)
    purchase_dto: Optional[shared.PurchaseDto] = field(default=None)
    status_code: int = field(default=None)
    
