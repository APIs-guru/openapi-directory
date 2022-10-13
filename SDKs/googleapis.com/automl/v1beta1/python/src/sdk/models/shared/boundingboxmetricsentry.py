from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boundingboxmetricsentryconfidencemetricsentry


@dataclass_json
@dataclass
class BoundingBoxMetricsEntry:
    confidence_metrics_entries: Optional[List[boundingboxmetricsentryconfidencemetricsentry.BoundingBoxMetricsEntryConfidenceMetricsEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceMetricsEntries' }})
    iou_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iouThreshold' }})
    mean_average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanAveragePrecision' }})
    
