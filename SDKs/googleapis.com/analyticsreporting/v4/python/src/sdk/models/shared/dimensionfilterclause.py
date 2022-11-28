from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DimensionFilterClauseOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    OR = "OR"
    AND = "AND"


@dataclass_json
@dataclass
class DimensionFilterClause:
    r"""DimensionFilterClause
    A group of dimension filters. Set the operator value to specify how the filters are logically combined.
    """
    
    filters: Optional[List[DimensionFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    operator: Optional[DimensionFilterClauseOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    
