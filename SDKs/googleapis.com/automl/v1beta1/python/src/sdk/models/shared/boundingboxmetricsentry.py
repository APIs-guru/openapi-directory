from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BoundingBoxMetricsEntry:
    r"""BoundingBoxMetricsEntry
    Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.
    """
    
    confidence_metrics_entries: Optional[List[BoundingBoxMetricsEntryConfidenceMetricsEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceMetricsEntries') }})
    iou_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iouThreshold') }})
    mean_average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanAveragePrecision') }})
    
