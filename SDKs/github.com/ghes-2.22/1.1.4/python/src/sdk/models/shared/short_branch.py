from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShortBranchCommit:
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ShortBranch:
    r"""ShortBranch
    Short Branch
    """
    
    commit: ShortBranchCommit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protected: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protected') }})
    protection: Optional[BranchProtection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    protection_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection_url') }})
    
