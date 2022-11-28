from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagFilter:
    r"""TagFilter
    Used to filter information based on tags.
    """
    
    tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagKey') }})
    tag_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValues') }})
    
