from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchResourcesTagCriterion:
    r"""SearchResourcesTagCriterion
    Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
    """
    
    comparator: Optional[SearchResourcesComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    tag_values: Optional[List[SearchResourcesTagCriterionPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValues') }})
    
