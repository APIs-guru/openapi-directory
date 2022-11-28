from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DimensionKeyDetail:
    r"""DimensionKeyDetail
    An object that describes the details for a specified dimension.
    """
    
    dimension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimension') }})
    status: Optional[DetailStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
