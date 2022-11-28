from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TagScopeTerm:
    r"""TagScopeTerm
    Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.
    """
    
    comparator: Optional[JobComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    tag_values: Optional[List[TagValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValues') }})
    target: Optional[TagTargetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
