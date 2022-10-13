from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateEnvironmentAccountConnectionInput:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
