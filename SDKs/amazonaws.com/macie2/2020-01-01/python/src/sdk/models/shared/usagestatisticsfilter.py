from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsageStatisticsFilter:
    r"""UsageStatisticsFilter
    Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.
    """
    
    comparator: Optional[UsageStatisticsFilterComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    key: Optional[UsageStatisticsFilterKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
