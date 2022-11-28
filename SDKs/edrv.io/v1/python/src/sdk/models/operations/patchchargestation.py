from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PatchChargeStationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PatchChargeStation200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PatchChargeStationRequest:
    path_params: PatchChargeStationPathParams = field()
    request: shared.Schema1 = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchChargeStationResponse:
    content_type: str = field()
    status_code: int = field()
    patch_charge_station_200_application_json_object: Optional[PatchChargeStation200ApplicationJSON] = field(default=None)
    
