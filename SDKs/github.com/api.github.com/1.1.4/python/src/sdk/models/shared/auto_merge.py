from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import simple_user

class AutoMergeMergeMethodEnum(str, Enum):
    MERGE = "merge"
    SQUASH = "squash"
    REBASE = "rebase"


@dataclass_json
@dataclass
class AutoMerge:
    commit_message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_message' }})
    commit_title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_title' }})
    enabled_by: simple_user.SimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled_by' }})
    merge_method: AutoMergeMergeMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merge_method' }})
    
