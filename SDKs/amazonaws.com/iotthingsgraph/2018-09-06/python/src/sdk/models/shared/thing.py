from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Thing:
    thing_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingArn' }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingName' }})
    
