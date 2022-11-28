from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupCount:
    r"""GroupCount
    Provides a group of results for a query that retrieved aggregated statistical data about findings.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    group_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupKey') }})
    
