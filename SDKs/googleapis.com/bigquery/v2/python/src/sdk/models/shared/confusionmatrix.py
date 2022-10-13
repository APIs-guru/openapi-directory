from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import row


@dataclass_json
@dataclass
class ConfusionMatrix:
    confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceThreshold' }})
    rows: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
