from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FeatureValue:
    r"""FeatureValue
    Representative value of a single feature within the cluster.
    """
    
    categorical_value: Optional[CategoricalValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalValue') }})
    feature_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureColumn') }})
    numerical_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericalValue') }})
    
