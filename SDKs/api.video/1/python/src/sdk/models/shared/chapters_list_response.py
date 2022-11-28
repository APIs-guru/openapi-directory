from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChaptersListResponse:
    data: Optional[List[Chapter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination: Optional[Pagination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    
