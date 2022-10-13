from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AllMonitors200ApplicationJSONMonitors:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class AllMonitors200ApplicationJSON:
    monitors: Optional[List[AllMonitors200ApplicationJSONMonitors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitors' }})
    

@dataclass
class AllMonitorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    all_monitors_200_application_json_object: Optional[AllMonitors200ApplicationJSON] = field(default=None)
    
