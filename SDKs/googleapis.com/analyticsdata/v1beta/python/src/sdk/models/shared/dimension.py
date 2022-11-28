from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Dimension:
    r"""Dimension
    Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be \"Paris\" or \"New York\". Requests are allowed up to 9 dimensions.
    """
    
    dimension_expression: Optional[DimensionExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionExpression') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
