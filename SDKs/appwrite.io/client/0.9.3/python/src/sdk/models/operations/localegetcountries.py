from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LocaleGetCountriesSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocaleGetCountriesRequest:
    security: LocaleGetCountriesSecurity = field(default=None)
    

@dataclass
class LocaleGetCountriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    country_list: Optional[shared.CountryList] = field(default=None)
    
