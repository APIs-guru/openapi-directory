from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OpsItemFilter:
    r"""OpsItemFilter
    Describes an OpsItem filter.
    """
    
    key: OpsItemFilterKeyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    operator: OpsItemFilterOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
