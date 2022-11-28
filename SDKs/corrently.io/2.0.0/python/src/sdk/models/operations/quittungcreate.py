from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QuittungCreateRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass
class QuittungCreateRequest:
    request: QuittungCreateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QuittungCreateResponse:
    content_type: str = field()
    status_code: int = field()
    quittung_create_200_application_json_string: Optional[str] = field(default=None)
    
