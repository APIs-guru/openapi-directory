from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstancePatchStateFilter:
    r"""InstancePatchStateFilter
    <p>Defines a filter used in <a>DescribeInstancePatchStatesForPatchGroup</a> to scope down the information returned by the API.</p> <p> <b>Example</b>: To filter for all instances in a patch group having more than three patches with a <code>FailedCount</code> status, use the following for the filter:</p> <ul> <li> <p>Value for <code>Key</code>: <code>FailedCount</code> </p> </li> <li> <p>Value for <code>Type</code>: <code>GreaterThan</code> </p> </li> <li> <p>Value for <code>Values</code>: <code>3</code> </p> </li> </ul>
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    type: InstancePatchStateOperatorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
