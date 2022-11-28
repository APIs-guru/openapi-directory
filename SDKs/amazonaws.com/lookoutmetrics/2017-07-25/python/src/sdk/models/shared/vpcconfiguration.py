from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcConfiguration:
    r"""VpcConfiguration
    Contains configuration information about the Amazon Virtual Private Cloud (VPC).
    """
    
    security_group_id_list: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIdList') }})
    subnet_id_list: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIdList') }})
    
