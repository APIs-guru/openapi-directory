from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LocaleGetCurrenciesSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocaleGetCurrenciesRequest:
    security: LocaleGetCurrenciesSecurity = field(default=None)
    

@dataclass
class LocaleGetCurrenciesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    currency_list: Optional[shared.CurrencyList] = field(default=None)
    
