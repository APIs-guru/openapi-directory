from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeRdsDbInstancesRequest:
    rds_db_instance_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RdsDbInstanceArns' }})
    stack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    
