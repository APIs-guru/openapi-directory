from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import label


@dataclass_json
@dataclass
class LabelDetection:
    label: Optional[label.Label] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Label' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }})
    
