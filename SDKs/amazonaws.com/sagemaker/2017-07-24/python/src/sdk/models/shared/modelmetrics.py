from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bias
from . import explainability
from . import modeldataquality
from . import modelquality


@dataclass_json
@dataclass
class ModelMetrics:
    bias: Optional[bias.Bias] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bias' }})
    explainability: Optional[explainability.Explainability] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Explainability' }})
    model_data_quality: Optional[modeldataquality.ModelDataQuality] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelDataQuality' }})
    model_quality: Optional[modelquality.ModelQuality] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelQuality' }})
    
