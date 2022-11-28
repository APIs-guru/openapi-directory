from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeElasticIpsRequest:
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ips') }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    
