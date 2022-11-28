from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LocaleGetSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocaleGetRequest:
    security: LocaleGetSecurity = field()
    

@dataclass
class LocaleGetResponse:
    content_type: str = field()
    status_code: int = field()
    locale: Optional[shared.Locale] = field(default=None)
    
