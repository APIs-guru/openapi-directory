from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OpsItemEventFilter:
    r"""OpsItemEventFilter
    Describes a filter for a specific list of OpsItem events. You can filter event information by using tags. You specify tags by using a key-value pair mapping. 
    """
    
    key: OpsItemEventFilterKeyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    operator: OpsItemEventFilterOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
