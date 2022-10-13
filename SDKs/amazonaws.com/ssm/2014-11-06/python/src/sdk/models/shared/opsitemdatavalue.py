from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import opsitemdatatype_enum


@dataclass_json
@dataclass
class OpsItemDataValue:
    type: Optional[opsitemdatatype_enum.OpsItemDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
