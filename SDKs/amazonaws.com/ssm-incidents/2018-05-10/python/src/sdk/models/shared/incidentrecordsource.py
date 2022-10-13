from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IncidentRecordSource:
    created_by: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    invoked_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invokedBy' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
