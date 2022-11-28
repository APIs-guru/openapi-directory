from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeBatchPredictionsInput:
    eq: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EQ') }})
    filter_variable: Optional[BatchPredictionFilterVariableEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterVariable') }})
    ge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GE') }})
    gt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GT') }})
    le: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LE') }})
    lt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LT') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    ne: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NE') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    sort_order: Optional[SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    
