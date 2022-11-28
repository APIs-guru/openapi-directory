from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryItemAttribute:
    r"""InventoryItemAttribute
    Attributes are the entries within the inventory item content. It contains name and value.
    """
    
    data_type: InventoryAttributeDataTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
