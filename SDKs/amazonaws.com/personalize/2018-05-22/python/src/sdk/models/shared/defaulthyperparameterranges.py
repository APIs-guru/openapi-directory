from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DefaultHyperParameterRanges:
    r"""DefaultHyperParameterRanges
    Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.
    """
    
    categorical_hyper_parameter_ranges: Optional[List[DefaultCategoricalHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalHyperParameterRanges') }})
    continuous_hyper_parameter_ranges: Optional[List[DefaultContinuousHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuousHyperParameterRanges') }})
    integer_hyper_parameter_ranges: Optional[List[DefaultIntegerHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerHyperParameterRanges') }})
    
