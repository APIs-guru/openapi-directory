from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TranslateSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class Translate400ApplicationJSON:
    errors: Optional[List[shared.Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclass
class Translate500ApplicationJSON:
    errors: Optional[List[shared.Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class TranslateRequest:
    request: shared.TranslateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: TranslateSecurity = field()
    

@dataclass
class TranslateResponse:
    content_type: str = field()
    status_code: int = field()
    translate_response: Optional[shared.TranslateResponse] = field(default=None)
    translate_400_application_json_object: Optional[Translate400ApplicationJSON] = field(default=None)
    translate_500_application_json_object: Optional[Translate500ApplicationJSON] = field(default=None)
    
