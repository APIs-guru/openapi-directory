from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CategoryCount:
    r"""CategoryCount
    Represents the count of a single category within the cluster.
    """
    
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    
