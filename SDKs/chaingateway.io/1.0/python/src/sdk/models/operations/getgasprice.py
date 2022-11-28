from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGasPriceHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGasPriceRequest:
    headers: GetGasPriceHeaders = field()
    

@dataclass
class GetGasPriceResponse:
    content_type: str = field()
    status_code: int = field()
    get_gas_price: Optional[shared.GetGasPrice] = field(default=None)
    
