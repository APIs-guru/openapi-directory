from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BigtableColumn:
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    only_read_latest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyReadLatest') }})
    qualifier_encoded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualifierEncoded') }})
    qualifier_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualifierString') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
