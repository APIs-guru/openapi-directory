from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeInstancesResult:
    r"""DescribeInstancesResult
    Contains the response to a <code>DescribeInstances</code> request.
    """
    
    instances: Optional[List[Instance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    
