from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LocaleGetContinentsSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocaleGetContinentsRequest:
    security: LocaleGetContinentsSecurity = field()
    

@dataclass
class LocaleGetContinentsResponse:
    content_type: str = field()
    status_code: int = field()
    continent_list: Optional[shared.ContinentList] = field(default=None)
    
