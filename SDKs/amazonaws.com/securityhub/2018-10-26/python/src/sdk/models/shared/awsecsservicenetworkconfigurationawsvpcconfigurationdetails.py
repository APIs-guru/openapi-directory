from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails:
    r"""AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails
    For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
    """
    
    assign_public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignPublicIp') }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    
