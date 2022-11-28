from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeInstanceInformationResult:
    instance_information_list: Optional[List[InstanceInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceInformationList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
