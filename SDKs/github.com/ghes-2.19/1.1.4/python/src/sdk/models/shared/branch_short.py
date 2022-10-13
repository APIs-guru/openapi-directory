from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BranchShortCommit:
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class BranchShort:
    commit: BranchShortCommit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protected: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protected' }})
    
