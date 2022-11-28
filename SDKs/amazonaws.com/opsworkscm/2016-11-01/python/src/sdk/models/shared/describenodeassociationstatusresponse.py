from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeNodeAssociationStatusResponse:
    engine_attributes: Optional[List[EngineAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineAttributes') }})
    node_association_status: Optional[NodeAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeAssociationStatus') }})
    
