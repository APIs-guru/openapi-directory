from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import modificationresourceenum_enum
from . import modificationstateenum_enum


@dataclass_json
@dataclass
class ModificationState:
    resource: Optional[modificationresourceenum_enum.ModificationResourceEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resource' }})
    state: Optional[modificationstateenum_enum.ModificationStateEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
