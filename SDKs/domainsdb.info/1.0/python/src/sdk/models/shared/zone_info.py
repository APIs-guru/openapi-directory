from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ZoneInfo:
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    in_bundles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_bundles') }})
    includes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includes') }})
    
