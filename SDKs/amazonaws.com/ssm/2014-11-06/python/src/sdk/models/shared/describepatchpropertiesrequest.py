from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePatchPropertiesRequest:
    operating_system: OperatingSystemEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperatingSystem') }})
    property: PatchPropertyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Property') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    patch_set: Optional[PatchSetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchSet') }})
    
