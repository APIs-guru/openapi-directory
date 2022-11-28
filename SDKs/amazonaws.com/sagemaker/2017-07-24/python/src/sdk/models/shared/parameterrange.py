from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParameterRange:
    r"""ParameterRange
    Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm.
    """
    
    categorical_parameter_range_specification: Optional[CategoricalParameterRangeSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CategoricalParameterRangeSpecification') }})
    continuous_parameter_range_specification: Optional[ContinuousParameterRangeSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContinuousParameterRangeSpecification') }})
    integer_parameter_range_specification: Optional[IntegerParameterRangeSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegerParameterRangeSpecification') }})
    
