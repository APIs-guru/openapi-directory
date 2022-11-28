from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchRequest:
    resource: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    search_expression: Optional[SearchExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchExpression') }})
    sort_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortBy') }})
    sort_order: Optional[SearchSortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    
