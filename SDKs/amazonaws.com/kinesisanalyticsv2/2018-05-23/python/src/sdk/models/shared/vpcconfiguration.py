from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VpcConfiguration:
    security_group_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    
