from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AllowedUse:
    how_can_i_use_it: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('how_can_i_use_it') }})
    release_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_info') }})
    usage_restrictions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_restrictions') }})
    
