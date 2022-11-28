from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BigtableColumnFamily:
    columns: Optional[List[BigtableColumn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    family_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyId') }})
    only_read_latest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyReadLatest') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
