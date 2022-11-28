from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MetricFilterClauseOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    OR = "OR"
    AND = "AND"


@dataclass_json
@dataclass
class MetricFilterClause:
    r"""MetricFilterClause
    Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.
    """
    
    filters: Optional[List[MetricFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    operator: Optional[MetricFilterClauseOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    
