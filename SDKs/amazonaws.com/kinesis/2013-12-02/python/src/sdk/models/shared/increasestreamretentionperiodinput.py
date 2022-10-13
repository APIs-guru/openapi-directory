from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IncreaseStreamRetentionPeriodInput:
    retention_period_hours: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionPeriodHours' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
