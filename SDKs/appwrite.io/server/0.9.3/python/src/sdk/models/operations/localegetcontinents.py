from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LocaleGetContinentsSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocaleGetContinentsRequest:
    security: LocaleGetContinentsSecurity = field(default=None)
    

@dataclass
class LocaleGetContinentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    continent_list: Optional[shared.ContinentList] = field(default=None)
    
