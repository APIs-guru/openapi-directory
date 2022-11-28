from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BranchShortCommit:
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class BranchShort:
    r"""BranchShort
    Branch Short
    """
    
    commit: BranchShortCommit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protected: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protected') }})
    
