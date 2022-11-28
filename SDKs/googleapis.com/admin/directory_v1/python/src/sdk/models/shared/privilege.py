from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Privilege:
    child_privileges: Optional[List[Privilege]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPrivileges') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    is_ou_scopable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOuScopable') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    privilege_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privilegeName') }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceId') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
