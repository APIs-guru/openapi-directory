from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExpressionVariable:
    r"""ExpressionVariable
    Contains expression variable information.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: VariableValue = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
