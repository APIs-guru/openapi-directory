from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import classificationevaluationmetricsconfusionmatrixrow


@dataclass_json
@dataclass
class ConfusionMatrix:
    annotation_spec_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecId' }})
    display_name: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    row: Optional[List[classificationevaluationmetricsconfusionmatrixrow.ClassificationEvaluationMetricsConfusionMatrixRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row' }})
    
