from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import detailstatus_enum


@dataclass_json
@dataclass
class DimensionKeyDetail:
    dimension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimension' }})
    status: Optional[detailstatus_enum.DetailStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
