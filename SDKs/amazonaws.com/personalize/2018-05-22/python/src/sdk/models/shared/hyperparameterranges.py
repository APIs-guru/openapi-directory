from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import categoricalhyperparameterrange
from . import continuoushyperparameterrange
from . import integerhyperparameterrange


@dataclass_json
@dataclass
class HyperParameterRanges:
    categorical_hyper_parameter_ranges: Optional[List[categoricalhyperparameterrange.CategoricalHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoricalHyperParameterRanges' }})
    continuous_hyper_parameter_ranges: Optional[List[continuoushyperparameterrange.ContinuousHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuousHyperParameterRanges' }})
    integer_hyper_parameter_ranges: Optional[List[integerhyperparameterrange.IntegerHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerHyperParameterRanges' }})
    
