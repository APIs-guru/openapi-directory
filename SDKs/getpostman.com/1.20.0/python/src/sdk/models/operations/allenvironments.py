from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AllEnvironments200ApplicationJSONEnvironments:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class AllEnvironments200ApplicationJSON:
    environments: Optional[List[AllEnvironments200ApplicationJSONEnvironments]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    

@dataclass
class AllEnvironmentsResponse:
    content_type: str = field()
    status_code: int = field()
    all_environments_200_application_json_object: Optional[AllEnvironments200ApplicationJSON] = field(default=None)
    
