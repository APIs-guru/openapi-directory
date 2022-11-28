from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdatereservationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdatereservationRequestBody:
    connector: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connector') }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driver') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    evse: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evse') }})
    

@dataclass_json
@dataclass
class Updatereservation201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdatereservationRequest:
    path_params: UpdatereservationPathParams = field()
    request: UpdatereservationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatereservationResponse:
    content_type: str = field()
    status_code: int = field()
    updatereservation_201_application_json_object: Optional[Updatereservation201ApplicationJSON] = field(default=None)
    
