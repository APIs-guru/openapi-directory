from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PreviousBuild:
    r"""PreviousBuild
    previous build
    """
    
    build_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_num') }})
    build_time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_time_millis') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
