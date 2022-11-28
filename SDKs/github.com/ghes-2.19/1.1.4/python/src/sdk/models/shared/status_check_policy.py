from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatusCheckPolicy:
    r"""StatusCheckPolicy
    Status Check Policy
    """
    
    contexts: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    contexts_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts_url') }})
    strict: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strict') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
