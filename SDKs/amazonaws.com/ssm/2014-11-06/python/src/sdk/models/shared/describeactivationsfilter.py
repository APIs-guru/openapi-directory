from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeActivationsFilter:
    r"""DescribeActivationsFilter
    Filter for the DescribeActivation API.
    """
    
    filter_key: Optional[DescribeActivationsFilterKeysEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterKey') }})
    filter_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterValues') }})
    
