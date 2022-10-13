from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteNamespaceRequest:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    
