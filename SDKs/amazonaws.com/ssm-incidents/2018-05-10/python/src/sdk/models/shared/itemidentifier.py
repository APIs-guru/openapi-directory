from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import itemtype_enum
from . import itemvalue


@dataclass_json
@dataclass
class ItemIdentifier:
    type: itemtype_enum.ItemTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: itemvalue.ItemValue = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
