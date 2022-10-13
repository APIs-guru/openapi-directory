from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateProjectOutput:
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectArn' }})
    project_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectId' }})
    
