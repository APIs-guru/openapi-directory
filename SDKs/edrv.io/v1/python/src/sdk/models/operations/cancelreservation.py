from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CancelreservationRequestBody:
    reservation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservation') }})
    

@dataclass_json
@dataclass
class Cancelreservation201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CancelreservationRequest:
    request: CancelreservationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CancelreservationResponse:
    content_type: str = field()
    status_code: int = field()
    cancelreservation_201_application_json_object: Optional[Cancelreservation201ApplicationJSON] = field(default=None)
    
