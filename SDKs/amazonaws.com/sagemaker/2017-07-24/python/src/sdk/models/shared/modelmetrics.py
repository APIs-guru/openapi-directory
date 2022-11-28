from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelMetrics:
    r"""ModelMetrics
    Contains metrics captured from a model.
    """
    
    bias: Optional[Bias] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bias') }})
    explainability: Optional[Explainability] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Explainability') }})
    model_data_quality: Optional[ModelDataQuality] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelDataQuality') }})
    model_quality: Optional[ModelQuality] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelQuality') }})
    
