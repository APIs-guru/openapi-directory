from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateSchemaRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schema: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    
