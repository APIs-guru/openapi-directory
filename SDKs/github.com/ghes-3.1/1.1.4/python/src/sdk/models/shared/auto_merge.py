from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AutoMergeMergeMethodEnum(str, Enum):
    MERGE = "merge"
    SQUASH = "squash"
    REBASE = "rebase"


@dataclass_json
@dataclass
class AutoMerge:
    r"""AutoMerge
    The status of auto merging a pull request.
    """
    
    commit_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_message') }})
    commit_title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_title') }})
    enabled_by: SimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_by') }})
    merge_method: AutoMergeMergeMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merge_method') }})
    
