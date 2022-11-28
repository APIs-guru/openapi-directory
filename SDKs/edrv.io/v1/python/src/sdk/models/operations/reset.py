from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResetRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestation') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class Reset201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ResetRequest:
    request: ResetRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResetResponse:
    content_type: str = field()
    status_code: int = field()
    reset_201_application_json_object: Optional[Reset201ApplicationJSON] = field(default=None)
    
