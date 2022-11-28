from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFindingsFiltersResponse:
    findings_filter_list_items: Optional[List[FindingsFilterListItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingsFilterListItems') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
