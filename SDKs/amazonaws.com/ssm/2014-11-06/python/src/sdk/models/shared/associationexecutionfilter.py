from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssociationExecutionFilter:
    r"""AssociationExecutionFilter
    Filters used in the request.
    """
    
    key: AssociationExecutionFilterKeyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    type: AssociationFilterOperatorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
