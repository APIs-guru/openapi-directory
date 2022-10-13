from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import categoricalvalue


@dataclass_json
@dataclass
class FeatureValue:
    categorical_value: Optional[categoricalvalue.CategoricalValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoricalValue' }})
    feature_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureColumn' }})
    numerical_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericalValue' }})
    
