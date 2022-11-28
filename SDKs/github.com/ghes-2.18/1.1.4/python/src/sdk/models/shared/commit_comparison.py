from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CommitComparisonStatusEnum(str, Enum):
    DIVERGED = "diverged"
    AHEAD = "ahead"
    BEHIND = "behind"
    IDENTICAL = "identical"


@dataclass_json
@dataclass
class CommitComparison:
    r"""CommitComparison
    Commit Comparison
    """
    
    ahead_by: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ahead_by') }})
    base_commit: Commit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_commit') }})
    behind_by: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('behind_by') }})
    commits: List[Commit] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits') }})
    diff_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diff_url') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    merge_base_commit: Commit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merge_base_commit') }})
    patch_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patch_url') }})
    permalink_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permalink_url') }})
    status: CommitComparisonStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    total_commits: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_commits') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    files: Optional[List[DiffEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    
