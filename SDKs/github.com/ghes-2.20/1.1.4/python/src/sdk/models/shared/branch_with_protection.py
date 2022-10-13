from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import commit
from . import branch_protection


@dataclass_json
@dataclass
class BranchWithProtectionLinks:
    html: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class BranchWithProtection:
    links: BranchWithProtectionLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    commit: commit.Commit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pattern' }})
    protected: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protected' }})
    protection: branch_protection.BranchProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    protection_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection_url' }})
    required_approving_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_approving_review_count' }})
    
