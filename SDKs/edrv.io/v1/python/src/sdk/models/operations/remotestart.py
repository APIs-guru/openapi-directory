from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemotestartRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestation') }})
    connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connector') }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driver') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclass
class Remotestart201ApplicationJSON:
    command: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    

@dataclass
class RemotestartRequest:
    request: RemotestartRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemotestartResponse:
    content_type: str = field()
    status_code: int = field()
    remotestart_201_application_json_object: Optional[Remotestart201ApplicationJSON] = field(default=None)
    
