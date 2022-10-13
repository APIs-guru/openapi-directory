from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GeneralAPICurrenciesHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class GeneralAPICurrenciesRequest:
    headers: GeneralAPICurrenciesHeaders = field(default=None)
    

@dataclass
class GeneralAPICurrenciesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    currency_details_api_models: Optional[List[shared.CurrencyDetailsAPIModel]] = field(default=None)
    status_code: int = field(default=None)
    
