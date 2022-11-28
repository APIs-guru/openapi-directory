from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FilterExpressionList:
    r"""FilterExpressionList
    A list of filter expressions.
    """
    
    expressions: Optional[List[FilterExpression]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expressions') }})
    
