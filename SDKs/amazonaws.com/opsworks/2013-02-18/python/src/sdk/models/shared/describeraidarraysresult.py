from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeRaidArraysResult:
    r"""DescribeRaidArraysResult
    Contains the response to a <code>DescribeRaidArrays</code> request.
    """
    
    raid_arrays: Optional[List[RaidArray]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RaidArrays') }})
    
