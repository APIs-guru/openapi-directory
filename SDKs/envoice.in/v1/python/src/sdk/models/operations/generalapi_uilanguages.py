from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GeneralAPIUILanguagesHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeneralAPIUILanguagesRequest:
    headers: GeneralAPIUILanguagesHeaders = field()
    

@dataclass
class GeneralAPIUILanguagesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    ui_language_details_api_models: Optional[List[shared.UILanguageDetailsAPIModel]] = field(default=None)
    
