from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetQueryResultsResponse:
    results: Optional[List[List[ResultField]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    statistics: Optional[QueryStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    status: Optional[QueryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
