from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResponsePlanSummary:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
