from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NetworkConfiguration:
    r"""NetworkConfiguration
    The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href=\"https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html\">About networking on Amazon MWAA</a>.
    """
    
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    
