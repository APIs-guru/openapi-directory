from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SharedTargeting:
    exclusions: Optional[List[TargetingValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusions') }})
    inclusions: Optional[List[TargetingValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inclusions') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
