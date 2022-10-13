from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import container


@dataclass_json
@dataclass
class CreateContainerOutput:
    container: container.Container = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    
