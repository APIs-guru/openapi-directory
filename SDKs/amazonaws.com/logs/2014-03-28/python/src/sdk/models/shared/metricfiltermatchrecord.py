from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetricFilterMatchRecord:
    event_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventMessage' }})
    event_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventNumber' }})
    extracted_values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractedValues' }})
    
