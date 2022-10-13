from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import input


@dataclass_json
@dataclass
class AddApplicationInputRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    current_application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    input: input.Input = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Input' }})
    
