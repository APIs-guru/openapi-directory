from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceLimit:
    r"""ServiceLimit
    Specifies a current quota for an Amazon Macie account.
    """
    
    is_service_limited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isServiceLimited') }})
    unit: Optional[UnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
