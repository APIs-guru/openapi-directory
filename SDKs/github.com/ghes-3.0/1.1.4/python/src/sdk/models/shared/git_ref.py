from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GitRefObject:
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GitRef:
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    object: GitRefObject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
