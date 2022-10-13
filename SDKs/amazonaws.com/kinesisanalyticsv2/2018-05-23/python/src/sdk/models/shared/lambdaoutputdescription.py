from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LambdaOutputDescription:
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    
