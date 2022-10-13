from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import typehint_enum
from . import field


@dataclass_json
@dataclass
class SQLParameter:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type_hint: Optional[typehint_enum.TypeHintEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeHint' }})
    value: Optional[field.Field] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
