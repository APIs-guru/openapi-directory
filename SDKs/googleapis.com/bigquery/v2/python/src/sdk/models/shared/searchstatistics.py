from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchStatistics:
    index_unused_reason: Optional[List[IndexUnusedReason]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexUnusedReason') }})
    index_usage_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexUsageMode') }})
    
