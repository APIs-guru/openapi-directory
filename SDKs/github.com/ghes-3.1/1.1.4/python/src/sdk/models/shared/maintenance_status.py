from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MaintenanceStatusConnectionServices:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclass
class MaintenanceStatus:
    connection_services: Optional[List[MaintenanceStatusConnectionServices]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_services') }})
    scheduled_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_time') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
