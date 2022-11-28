from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageObjectDetectionEvaluationMetrics:
    r"""ImageObjectDetectionEvaluationMetrics
    Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes.
    """
    
    bounding_box_mean_average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBoxMeanAveragePrecision') }})
    bounding_box_metrics_entries: Optional[List[BoundingBoxMetricsEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBoxMetricsEntries') }})
    evaluated_bounding_box_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluatedBoundingBoxCount') }})
    
