from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IntegerParameterRangeSpecification:
    r"""IntegerParameterRangeSpecification
    Defines the possible values for an integer hyperparameter.
    """
    
    max_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxValue') }})
    min_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinValue') }})
    
