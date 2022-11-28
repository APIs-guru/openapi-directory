from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListJobsFilterTerm:
    r"""ListJobsFilterTerm
    Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.
    """
    
    comparator: Optional[JobComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    key: Optional[ListJobsFilterKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
