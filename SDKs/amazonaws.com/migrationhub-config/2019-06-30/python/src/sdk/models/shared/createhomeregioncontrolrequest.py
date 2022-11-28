from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateHomeRegionControlRequest:
    home_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    target: Target = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    
