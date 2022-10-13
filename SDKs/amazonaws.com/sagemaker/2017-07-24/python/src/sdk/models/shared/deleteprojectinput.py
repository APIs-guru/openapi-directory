from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteProjectInput:
    project_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectName' }})
    
