from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LocaleGetCountriesEuSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocaleGetCountriesEuRequest:
    security: LocaleGetCountriesEuSecurity = field(default=None)
    

@dataclass
class LocaleGetCountriesEuResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    country_list: Optional[shared.CountryList] = field(default=None)
    
