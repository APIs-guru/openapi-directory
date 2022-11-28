from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceInformationFilter:
    r"""InstanceInformationFilter
    <p>Describes a filter for a specific list of instances. You can filter instances information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this operation instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and doesn't support tags. </p>
    """
    
    key: InstanceInformationFilterKeyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value_set: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueSet') }})
    
