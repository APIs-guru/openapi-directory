from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GeneralAPIUILanguagesHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class GeneralAPIUILanguagesRequest:
    headers: GeneralAPIUILanguagesHeaders = field(default=None)
    

@dataclass
class GeneralAPIUILanguagesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ui_language_details_api_models: Optional[List[shared.UILanguageDetailsAPIModel]] = field(default=None)
    
