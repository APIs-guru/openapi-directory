from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QuittungPrepareRequestBody:
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    

@dataclass
class QuittungPrepareRequest:
    request: Optional[QuittungPrepareRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QuittungPrepareResponse:
    content_type: str = field()
    status_code: int = field()
    quittung_prepare_200_application_json_string: Optional[str] = field(default=None)
    
