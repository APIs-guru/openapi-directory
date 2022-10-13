from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LocaleGetSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocaleGetRequest:
    security: LocaleGetSecurity = field(default=None)
    

@dataclass
class LocaleGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    locale: Optional[shared.Locale] = field(default=None)
    
