from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcDescription:
    r"""VpcDescription
    The description of the VPC in which the connector resides.
    """
    
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    
