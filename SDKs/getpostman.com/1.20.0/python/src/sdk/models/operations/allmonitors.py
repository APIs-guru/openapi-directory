from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AllMonitors200ApplicationJSONMonitors:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class AllMonitors200ApplicationJSON:
    monitors: Optional[List[AllMonitors200ApplicationJSONMonitors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitors') }})
    

@dataclass
class AllMonitorsResponse:
    content_type: str = field()
    status_code: int = field()
    all_monitors_200_application_json_object: Optional[AllMonitors200ApplicationJSON] = field(default=None)
    
