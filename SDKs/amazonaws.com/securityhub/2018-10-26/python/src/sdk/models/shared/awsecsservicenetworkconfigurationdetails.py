from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsecsservicenetworkconfigurationawsvpcconfigurationdetails


@dataclass_json
@dataclass
class AwsEcsServiceNetworkConfigurationDetails:
    aws_vpc_configuration: Optional[awsecsservicenetworkconfigurationawsvpcconfigurationdetails.AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsVpcConfiguration' }})
    
