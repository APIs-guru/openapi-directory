from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTagsForStreamOutput:
    r"""ListTagsForStreamOutput
    Represents the output for <code>ListTagsForStream</code>.
    """
    
    has_more_tags: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreTags') }})
    tags: List[Tag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
