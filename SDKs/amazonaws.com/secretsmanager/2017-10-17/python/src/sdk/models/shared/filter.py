from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    Allows you to add filters when you use the search function in Secrets Manager.
    """
    
    key: Optional[FilterNameStringTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
