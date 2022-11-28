from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAnomalyGroupSummariesResponse:
    anomaly_group_statistics: Optional[AnomalyGroupStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupStatistics') }})
    anomaly_group_summary_list: Optional[List[AnomalyGroupSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupSummaryList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
