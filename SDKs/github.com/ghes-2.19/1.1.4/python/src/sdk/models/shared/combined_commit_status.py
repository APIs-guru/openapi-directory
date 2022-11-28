from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CombinedCommitStatus:
    r"""CombinedCommitStatus
    Combined Commit Status
    """
    
    commit_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_url') }})
    repository: MinimalRepository = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    statuses: List[SimpleCommitStatus] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
