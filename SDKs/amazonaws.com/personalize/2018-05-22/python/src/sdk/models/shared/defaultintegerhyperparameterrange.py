from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DefaultIntegerHyperParameterRange:
    r"""DefaultIntegerHyperParameterRange
    Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
    """
    
    is_tunable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTunable') }})
    max_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
