from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventTriggerDefinition:
    event_resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventResourceARN' }})
    
