from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import output


@dataclass_json
@dataclass
class AddApplicationOutputRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    current_application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    output: output.Output = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Output' }})
    
