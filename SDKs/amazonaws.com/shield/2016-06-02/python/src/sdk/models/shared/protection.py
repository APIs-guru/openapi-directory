from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Protection:
    health_check_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckIds' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    protection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectionArn' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    
