from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParameterRanges:
    r"""ParameterRanges
    <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note>
    """
    
    categorical_parameter_ranges: Optional[List[CategoricalParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CategoricalParameterRanges') }})
    continuous_parameter_ranges: Optional[List[ContinuousParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContinuousParameterRanges') }})
    integer_parameter_ranges: Optional[List[IntegerParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegerParameterRanges') }})
    
