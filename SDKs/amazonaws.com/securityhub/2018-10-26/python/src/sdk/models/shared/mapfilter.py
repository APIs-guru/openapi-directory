from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mapfiltercomparison_enum


@dataclass_json
@dataclass
class MapFilter:
    comparison: Optional[mapfiltercomparison_enum.MapFilterComparisonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comparison' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
