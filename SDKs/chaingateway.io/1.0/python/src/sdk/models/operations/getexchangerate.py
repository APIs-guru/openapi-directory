from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetExchangeRateHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExchangeRateRequest:
    headers: GetExchangeRateHeaders = field()
    request: shared.GetExchangeRateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetExchangeRateResponse:
    content_type: str = field()
    status_code: int = field()
    get_exchange_rate: Optional[shared.GetExchangeRate] = field(default=None)
    
