from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnomalyGroupStatistics:
    r"""AnomalyGroupStatistics
    Aggregated statistics for a group of anomalous metrics.
    """
    
    evaluation_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationStartDate') }})
    itemized_metric_stats_list: Optional[List[ItemizedMetricStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemizedMetricStatsList') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
