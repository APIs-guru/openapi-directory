from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReserveRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestation') }})
    connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connector') }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driver') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclass
class Reserve201ApplicationJSON:
    command: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    

@dataclass
class ReserveRequest:
    request: ReserveRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReserveResponse:
    content_type: str = field()
    status_code: int = field()
    reserve_201_application_json_object: Optional[Reserve201ApplicationJSON] = field(default=None)
    
