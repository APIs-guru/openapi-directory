from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InferenceInputNameConfiguration:
    component_timestamp_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentTimestampDelimiter' }})
    timestamp_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimestampFormat' }})
    
