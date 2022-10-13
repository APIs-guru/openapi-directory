from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import severitylabel_enum


@dataclass_json
@dataclass
class Severity:
    label: Optional[severitylabel_enum.SeverityLabelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Label' }})
    normalized: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Normalized' }})
    original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Original' }})
    product: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Product' }})
    
