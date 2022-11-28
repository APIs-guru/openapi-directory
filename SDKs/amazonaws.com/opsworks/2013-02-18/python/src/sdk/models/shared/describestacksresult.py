from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeStacksResult:
    r"""DescribeStacksResult
    Contains the response to a <code>DescribeStacks</code> request.
    """
    
    stacks: Optional[List[Stack]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stacks') }})
    
