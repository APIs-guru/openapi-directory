from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GsiDispatchQueryParams:
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GsiDispatch200ApplicationJSONTimeframe:
    r"""GsiDispatch200ApplicationJSONTimeframe
    Evaluated timeframe for this request
    """
    
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclass
class GsiDispatch200ApplicationJSON:
    avg_distance_km: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_distance_km') }})
    dispatch_from: Optional[List[shared.DispatchLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatch_from') }})
    dispatch_target: Optional[List[shared.DispatchLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatch_target') }})
    postmix: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postmix') }})
    premix: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premix') }})
    timeframe: Optional[GsiDispatch200ApplicationJSONTimeframe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeframe') }})
    

@dataclass
class GsiDispatchRequest:
    query_params: GsiDispatchQueryParams = field()
    

@dataclass
class GsiDispatchResponse:
    content_type: str = field()
    status_code: int = field()
    gsi_dispatch_200_application_json_object: Optional[GsiDispatch200ApplicationJSON] = field(default=None)
    
