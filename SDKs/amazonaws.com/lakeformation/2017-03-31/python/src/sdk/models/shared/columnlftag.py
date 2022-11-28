from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColumnLfTag:
    r"""ColumnLfTag
    A structure containing the name of a column resource and the tags attached to it.
    """
    
    lf_tags: Optional[List[LfTagPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTags') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
