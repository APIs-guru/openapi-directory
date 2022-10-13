from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGasPriceHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': True }})
    

@dataclass
class GetGasPriceRequest:
    headers: GetGasPriceHeaders = field(default=None)
    

@dataclass
class GetGasPriceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_gas_price: Optional[shared.GetGasPrice] = field(default=None)
    
