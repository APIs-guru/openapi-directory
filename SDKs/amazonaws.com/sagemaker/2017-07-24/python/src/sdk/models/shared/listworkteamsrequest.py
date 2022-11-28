from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWorkteamsRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    name_contains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NameContains') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sort_by: Optional[ListWorkteamsSortByOptionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortBy') }})
    sort_order: Optional[SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    
