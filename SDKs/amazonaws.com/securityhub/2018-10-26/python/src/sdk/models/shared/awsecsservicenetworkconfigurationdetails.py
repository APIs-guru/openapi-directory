from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsServiceNetworkConfigurationDetails:
    r"""AwsEcsServiceNetworkConfigurationDetails
    For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
    """
    
    aws_vpc_configuration: Optional[AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsVpcConfiguration') }})
    
