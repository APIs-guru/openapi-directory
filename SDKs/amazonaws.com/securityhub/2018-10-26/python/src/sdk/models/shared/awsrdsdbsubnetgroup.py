from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsRdsDbSubnetGroup:
    r"""AwsRdsDbSubnetGroup
    Information about the subnet group for the database instance.
    """
    
    db_subnet_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbSubnetGroupArn') }})
    db_subnet_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbSubnetGroupDescription') }})
    db_subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbSubnetGroupName') }})
    subnet_group_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroupStatus') }})
    subnets: Optional[List[AwsRdsDbSubnetGroupSubnet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
