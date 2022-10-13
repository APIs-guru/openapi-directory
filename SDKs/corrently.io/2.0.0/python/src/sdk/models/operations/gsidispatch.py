from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GsiDispatchQueryParams:
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass
class GsiDispatchRequest:
    query_params: GsiDispatchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GsiDispatch200ApplicationJSONTimeframe:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

@dataclass_json
@dataclass
class GsiDispatch200ApplicationJSON:
    avg_distance_km: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avg_distance_km' }})
    dispatch_from: Optional[List[shared.DispatchLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatch_from' }})
    dispatch_target: Optional[List[shared.DispatchLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatch_target' }})
    postmix: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postmix' }})
    premix: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'premix' }})
    timeframe: Optional[GsiDispatch200ApplicationJSONTimeframe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeframe' }})
    

@dataclass
class GsiDispatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    gsi_dispatch_200_application_json_object: Optional[GsiDispatch200ApplicationJSON] = field(default=None)
    
