from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetExchangeRateHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExchangeRateRequest:
    headers: GetExchangeRateHeaders = field(default=None)
    request: shared.GetExchangeRateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetExchangeRateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_exchange_rate: Optional[shared.GetExchangeRate] = field(default=None)
    
