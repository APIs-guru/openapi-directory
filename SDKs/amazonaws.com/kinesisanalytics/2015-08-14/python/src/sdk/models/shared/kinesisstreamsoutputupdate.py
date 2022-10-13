from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KinesisStreamsOutputUpdate:
    resource_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARNUpdate' }})
    role_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARNUpdate' }})
    
