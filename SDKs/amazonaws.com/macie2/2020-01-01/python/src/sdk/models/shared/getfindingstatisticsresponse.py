from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetFindingStatisticsResponse:
    counts_by_group: Optional[List[GroupCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countsByGroup') }})
    
