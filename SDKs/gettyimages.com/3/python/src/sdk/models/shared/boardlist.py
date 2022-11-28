from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BoardList:
    board_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('board_count') }})
    boards: Optional[List[BoardListBoard]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boards') }})
    
