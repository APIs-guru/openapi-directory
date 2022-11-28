from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcConfig:
    r"""VpcConfig
    If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
    """
    
    subnets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    assign_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignPublicIp') }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    
