from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Setchargingschedule201ApplicationJSON:
    command: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    

@dataclass
class SetchargingscheduleRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetchargingscheduleResponse:
    content_type: str = field()
    status_code: int = field()
    setchargingschedule_201_application_json_object: Optional[Setchargingschedule201ApplicationJSON] = field(default=None)
    
