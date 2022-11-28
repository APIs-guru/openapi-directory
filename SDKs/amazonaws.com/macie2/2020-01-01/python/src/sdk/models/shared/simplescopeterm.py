from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SimpleScopeTerm:
    r"""SimpleScopeTerm
    Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.
    """
    
    comparator: Optional[JobComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    key: Optional[ScopeFilterKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
