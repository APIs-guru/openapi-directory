from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LocaleGetCountriesSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocaleGetCountriesRequest:
    security: LocaleGetCountriesSecurity = field()
    

@dataclass
class LocaleGetCountriesResponse:
    content_type: str = field()
    status_code: int = field()
    country_list: Optional[shared.CountryList] = field(default=None)
    
