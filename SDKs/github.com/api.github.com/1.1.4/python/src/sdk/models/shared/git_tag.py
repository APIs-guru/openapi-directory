from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import verification


@dataclass_json
@dataclass
class GitTagObject:
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GitTagTagger:
    date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GitTag:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    object: GitTagObject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    tagger: GitTagTagger = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagger' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verification: Optional[verification.Verification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification' }})
    
