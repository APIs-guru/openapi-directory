from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import environment


@dataclass_json
@dataclass
class UpdateEnvironmentOutput:
    environment: environment.Environment = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    
