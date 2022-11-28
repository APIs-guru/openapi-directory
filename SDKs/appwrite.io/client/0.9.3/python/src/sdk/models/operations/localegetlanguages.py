from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LocaleGetLanguagesSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocaleGetLanguagesRequest:
    security: LocaleGetLanguagesSecurity = field()
    

@dataclass
class LocaleGetLanguagesResponse:
    content_type: str = field()
    status_code: int = field()
    language_list: Optional[shared.LanguageList] = field(default=None)
    
