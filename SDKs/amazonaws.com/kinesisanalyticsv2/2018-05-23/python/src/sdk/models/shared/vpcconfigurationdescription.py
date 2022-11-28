from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcConfigurationDescription:
    r"""VpcConfigurationDescription
    Describes the parameters of a VPC used by the application.
    """
    
    security_group_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    vpc_configuration_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationId') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
