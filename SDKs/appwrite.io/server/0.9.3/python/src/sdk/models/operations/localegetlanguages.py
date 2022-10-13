from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LocaleGetLanguagesSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocaleGetLanguagesRequest:
    security: LocaleGetLanguagesSecurity = field(default=None)
    

@dataclass
class LocaleGetLanguagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    language_list: Optional[shared.LanguageList] = field(default=None)
    
