from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PatchConnectorPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PatchConnectorRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestation') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('power') }})
    power_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('power_type') }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PatchConnector201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PatchConnectorRequest:
    path_params: PatchConnectorPathParams = field()
    request: PatchConnectorRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchConnectorResponse:
    content_type: str = field()
    status_code: int = field()
    patch_connector_201_application_json_object: Optional[PatchConnector201ApplicationJSON] = field(default=None)
    
