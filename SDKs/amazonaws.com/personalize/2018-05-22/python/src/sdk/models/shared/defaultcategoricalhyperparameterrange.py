from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DefaultCategoricalHyperParameterRange:
    r"""DefaultCategoricalHyperParameterRange
    Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
    """
    
    is_tunable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTunable') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
