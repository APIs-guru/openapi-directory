from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import categoricalparameterrange
from . import continuousparameterrange
from . import integerparameterrange


@dataclass_json
@dataclass
class ParameterRanges:
    categorical_parameter_ranges: Optional[List[categoricalparameterrange.CategoricalParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CategoricalParameterRanges' }})
    continuous_parameter_ranges: Optional[List[continuousparameterrange.ContinuousParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContinuousParameterRanges' }})
    integer_parameter_ranges: Optional[List[integerparameterrange.IntegerParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegerParameterRanges' }})
    
