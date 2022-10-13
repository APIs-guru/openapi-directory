from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsrdsdbsubnetgroupsubnet


@dataclass_json
@dataclass
class AwsRdsDbSubnetGroup:
    db_subnet_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbSubnetGroupArn' }})
    db_subnet_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbSubnetGroupDescription' }})
    db_subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbSubnetGroupName' }})
    subnet_group_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetGroupStatus' }})
    subnets: Optional[List[awsrdsdbsubnetgroupsubnet.AwsRdsDbSubnetGroupSubnet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subnets' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
