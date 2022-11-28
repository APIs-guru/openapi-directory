from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatchBaselineIdentity:
    r"""PatchBaselineIdentity
    Defines the basic information about a patch baseline.
    """
    
    baseline_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineDescription') }})
    baseline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineId') }})
    baseline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineName') }})
    default_baseline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultBaseline') }})
    operating_system: Optional[OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperatingSystem') }})
    
