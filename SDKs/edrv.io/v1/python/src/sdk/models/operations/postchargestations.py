from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostChargeStationsRequest:
    request: shared.Schema1 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostChargeStations201ApplicationJSON:
    chargestation: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargestation' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    

@dataclass
class PostChargeStationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_charge_stations_201_application_json_object: Optional[PostChargeStations201ApplicationJSON] = field(default=None)
    
