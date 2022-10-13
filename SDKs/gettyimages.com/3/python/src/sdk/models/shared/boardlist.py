from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boardlistboard


@dataclass_json
@dataclass
class BoardList:
    board_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'board_count' }})
    boards: Optional[List[boardlistboard.BoardListBoard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boards' }})
    
