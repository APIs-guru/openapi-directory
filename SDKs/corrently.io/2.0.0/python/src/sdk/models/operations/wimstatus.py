from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class WimstatusQueryParams:
    vid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vid', 'style': 'form', 'explode': True }})
    

@dataclass
class WimstatusRequest:
    query_params: WimstatusQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Wimstatus200ApplicationJSON:
    wim_started: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wim_started' }})
    wim_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wim_status' }})
    

@dataclass
class WimstatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wimstatus_200_application_json_object: Optional[Wimstatus200ApplicationJSON] = field(default=None)
    
