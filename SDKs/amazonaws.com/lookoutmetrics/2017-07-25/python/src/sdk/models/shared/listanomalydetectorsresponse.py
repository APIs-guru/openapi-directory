from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAnomalyDetectorsResponse:
    anomaly_detector_summary_list: Optional[List[AnomalyDetectorSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorSummaryList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
