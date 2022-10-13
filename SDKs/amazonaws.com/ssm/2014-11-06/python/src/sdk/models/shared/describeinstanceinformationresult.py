from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceinformation


@dataclass_json
@dataclass
class DescribeInstanceInformationResult:
    instance_information_list: Optional[List[instanceinformation.InstanceInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceInformationList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
