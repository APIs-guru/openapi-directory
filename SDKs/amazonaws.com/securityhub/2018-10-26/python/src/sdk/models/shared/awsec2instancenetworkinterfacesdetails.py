from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEc2InstanceNetworkInterfacesDetails:
    r"""AwsEc2InstanceNetworkInterfacesDetails
    Identifies a network interface for the EC2 instance.
    """
    
    network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkInterfaceId') }})
    
