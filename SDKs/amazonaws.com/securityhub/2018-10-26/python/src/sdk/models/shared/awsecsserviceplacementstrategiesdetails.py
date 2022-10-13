from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsServicePlacementStrategiesDetails:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Field' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
