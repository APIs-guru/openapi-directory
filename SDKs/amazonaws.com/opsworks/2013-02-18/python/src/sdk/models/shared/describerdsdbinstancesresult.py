from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rdsdbinstance


@dataclass_json
@dataclass
class DescribeRdsDbInstancesResult:
    rds_db_instances: Optional[List[rdsdbinstance.RdsDbInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RdsDbInstances' }})
    
