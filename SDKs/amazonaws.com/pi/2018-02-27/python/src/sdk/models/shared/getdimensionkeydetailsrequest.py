from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDimensionKeyDetailsRequest:
    group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Group') }})
    group_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupIdentifier') }})
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    service_type: ServiceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceType') }})
    requested_dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedDimensions') }})
    
