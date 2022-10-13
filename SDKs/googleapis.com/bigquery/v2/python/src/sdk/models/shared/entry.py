from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Entry:
    item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemCount' }})
    predicted_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictedLabel' }})
    
