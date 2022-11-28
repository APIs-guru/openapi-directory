from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TagList:
    r"""TagList
    Tags List
    """
    
    sum: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    tags: List[Tag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
