from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import commit
from . import commit
from . import diff_entry
from . import commit

class CommitComparisonStatusEnum(str, Enum):
    DIVERGED = "diverged"
    AHEAD = "ahead"
    BEHIND = "behind"
    IDENTICAL = "identical"


@dataclass_json
@dataclass
class CommitComparison:
    ahead_by: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ahead_by' }})
    base_commit: commit.Commit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_commit' }})
    behind_by: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behind_by' }})
    commits: List[commit.Commit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits' }})
    diff_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diff_url' }})
    files: Optional[List[diff_entry.DiffEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    merge_base_commit: commit.Commit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merge_base_commit' }})
    patch_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patch_url' }})
    permalink_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permalink_url' }})
    status: CommitComparisonStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total_commits: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_commits' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
