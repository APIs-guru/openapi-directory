from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import timeinnanos
from . import variant


@dataclass_json
@dataclass
class InterpolatedAssetPropertyValue:
    timestamp: timeinnanos.TimeInNanos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    value: variant.Variant = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
