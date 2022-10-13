from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class MeteringGetQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass
class MeteringGetRequest:
    query_params: MeteringGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class MeteringGet200ApplicationJSON:
    one_8_0: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': '1.8.0' }})
    one_8_1: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': '1.8.1' }})
    one_8_2: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': '1.8.2' }})
    processing_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_processingTime' }})
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    co2_g_oekostrom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'co2_g_oekostrom' }})
    co2_g_standard: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'co2_g_standard' }})
    credits: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credits' }})
    time_stamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeStamp' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    

@dataclass
class MeteringGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    metering_get_200_application_json_object: Optional[MeteringGet200ApplicationJSON] = field(default=None)
    
