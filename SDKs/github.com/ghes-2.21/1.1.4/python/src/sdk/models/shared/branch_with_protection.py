from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BranchWithProtectionLinks:
    html: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class BranchWithProtection:
    r"""BranchWithProtection
    Branch With Protection
    """
    
    links: BranchWithProtectionLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    commit: Commit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protected: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protected') }})
    protection: BranchProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    protection_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection_url') }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pattern') }})
    required_approving_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_approving_review_count') }})
    
