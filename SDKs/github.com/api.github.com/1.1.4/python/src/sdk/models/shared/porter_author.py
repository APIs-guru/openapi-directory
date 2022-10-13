from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PorterAuthor:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    import_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'import_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    remote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote_id' }})
    remote_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote_name' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
