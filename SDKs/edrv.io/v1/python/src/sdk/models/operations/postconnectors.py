from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostConnectorsRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestation') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('power') }})
    power_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('power_type') }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostConnectors200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PostConnectorsRequest:
    request: PostConnectorsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostConnectorsResponse:
    content_type: str = field()
    status_code: int = field()
    post_connectors_200_application_json_object: Optional[PostConnectors200ApplicationJSON] = field(default=None)
    
