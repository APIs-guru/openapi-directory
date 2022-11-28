from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Vpc:
    r"""Vpc
    Information about the VPC in which the connector resides.
    """
    
    subnets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    
