from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteSubnetGroupResponse:
    subnet_group: Optional[SubnetGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroup') }})
    
