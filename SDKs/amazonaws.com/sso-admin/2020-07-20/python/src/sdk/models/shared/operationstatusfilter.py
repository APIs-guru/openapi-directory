from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OperationStatusFilter:
    r"""OperationStatusFilter
    Filters he operation status list based on the passed attribute value.
    """
    
    status: Optional[StatusValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
