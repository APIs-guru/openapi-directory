from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItemIdentifier:
    r"""ItemIdentifier
    Details and type of a related item.
    """
    
    type: ItemTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: ItemValue = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
