from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CanaryCodeOutput:
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Handler' }})
    source_location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceLocationArn' }})
    
