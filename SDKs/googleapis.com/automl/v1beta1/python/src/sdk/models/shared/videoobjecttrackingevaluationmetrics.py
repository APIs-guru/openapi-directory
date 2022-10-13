from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boundingboxmetricsentry


@dataclass_json
@dataclass
class VideoObjectTrackingEvaluationMetrics:
    bounding_box_mean_average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBoxMeanAveragePrecision' }})
    bounding_box_metrics_entries: Optional[List[boundingboxmetricsentry.BoundingBoxMetricsEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBoxMetricsEntries' }})
    evaluated_bounding_box_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluatedBoundingBoxCount' }})
    evaluated_frame_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluatedFrameCount' }})
    
