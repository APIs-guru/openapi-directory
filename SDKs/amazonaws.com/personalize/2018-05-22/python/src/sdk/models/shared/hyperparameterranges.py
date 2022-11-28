from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HyperParameterRanges:
    r"""HyperParameterRanges
    Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.
    """
    
    categorical_hyper_parameter_ranges: Optional[List[CategoricalHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalHyperParameterRanges') }})
    continuous_hyper_parameter_ranges: Optional[List[ContinuousHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuousHyperParameterRanges') }})
    integer_hyper_parameter_ranges: Optional[List[IntegerHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerHyperParameterRanges') }})
    
