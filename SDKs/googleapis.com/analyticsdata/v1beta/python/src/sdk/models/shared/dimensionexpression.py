from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DimensionExpression:
    r"""DimensionExpression
    Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).
    """
    
    concatenate: Optional[ConcatenateExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concatenate') }})
    lower_case: Optional[CaseExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowerCase') }})
    upper_case: Optional[CaseExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upperCase') }})
    
