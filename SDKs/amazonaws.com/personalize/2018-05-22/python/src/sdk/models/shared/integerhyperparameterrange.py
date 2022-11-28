from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IntegerHyperParameterRange:
    r"""IntegerHyperParameterRange
    Provides the name and range of an integer-valued hyperparameter.
    """
    
    max_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
