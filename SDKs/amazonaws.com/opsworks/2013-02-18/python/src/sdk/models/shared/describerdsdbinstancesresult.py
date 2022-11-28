from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeRdsDbInstancesResult:
    r"""DescribeRdsDbInstancesResult
    Contains the response to a <code>DescribeRdsDbInstances</code> request.
    """
    
    rds_db_instances: Optional[List[RdsDbInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RdsDbInstances') }})
    
