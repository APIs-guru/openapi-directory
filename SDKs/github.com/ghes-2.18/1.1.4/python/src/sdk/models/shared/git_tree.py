from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GitTreeTree:
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class GitTree:
    r"""GitTree
    The hierarchy between files in a Git repository.
    """
    
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    tree: List[GitTreeTree] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tree') }})
    truncated: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('truncated') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
