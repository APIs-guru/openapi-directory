from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvFeatureFlag:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    flag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flag') }})
    
