from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import defaultcategoricalhyperparameterrange
from . import defaultcontinuoushyperparameterrange
from . import defaultintegerhyperparameterrange


@dataclass_json
@dataclass
class DefaultHyperParameterRanges:
    categorical_hyper_parameter_ranges: Optional[List[defaultcategoricalhyperparameterrange.DefaultCategoricalHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoricalHyperParameterRanges' }})
    continuous_hyper_parameter_ranges: Optional[List[defaultcontinuoushyperparameterrange.DefaultContinuousHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuousHyperParameterRanges' }})
    integer_hyper_parameter_ranges: Optional[List[defaultintegerhyperparameterrange.DefaultIntegerHyperParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerHyperParameterRanges' }})
    
