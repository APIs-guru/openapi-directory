from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Standard:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    enabled_by_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnabledByDefault' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    standards_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardsArn' }})
    
