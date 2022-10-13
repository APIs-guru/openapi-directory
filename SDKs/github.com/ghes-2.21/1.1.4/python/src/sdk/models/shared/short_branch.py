from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import branch_protection


@dataclass_json
@dataclass
class ShortBranchCommit:
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ShortBranch:
    commit: ShortBranchCommit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protected: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protected' }})
    protection: Optional[branch_protection.BranchProtection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    protection_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection_url' }})
    
