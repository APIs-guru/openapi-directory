from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OpsItemRelatedItemsFilter:
    r"""OpsItemRelatedItemsFilter
    Describes a filter for a specific list of related-item resources. 
    """
    
    key: OpsItemRelatedItemsFilterKeyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    operator: OpsItemRelatedItemsFilterOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
