from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import categoricalparameterrangespecification
from . import continuousparameterrangespecification
from . import integerparameterrangespecification


@dataclass_json
@dataclass
class ParameterRange:
    categorical_parameter_range_specification: Optional[categoricalparameterrangespecification.CategoricalParameterRangeSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CategoricalParameterRangeSpecification' }})
    continuous_parameter_range_specification: Optional[continuousparameterrangespecification.ContinuousParameterRangeSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContinuousParameterRangeSpecification' }})
    integer_parameter_range_specification: Optional[integerparameterrangespecification.IntegerParameterRangeSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegerParameterRangeSpecification' }})
    
