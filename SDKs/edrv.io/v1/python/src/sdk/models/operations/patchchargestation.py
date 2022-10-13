from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PatchChargeStationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchChargeStationRequest:
    path_params: PatchChargeStationPathParams = field(default=None)
    request: shared.Schema1 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PatchChargeStation200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PatchChargeStationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    patch_charge_station_200_application_json_object: Optional[PatchChargeStation200ApplicationJSON] = field(default=None)
    
