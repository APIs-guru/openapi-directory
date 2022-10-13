from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagCommit:
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Tag:
    commit: TagCommit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    tarball_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tarball_url' }})
    zipball_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zipball_url' }})
    
