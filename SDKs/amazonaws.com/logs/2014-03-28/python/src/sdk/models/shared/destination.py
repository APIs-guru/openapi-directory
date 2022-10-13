from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Destination:
    access_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicy' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    creation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationName' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArn' }})
    
