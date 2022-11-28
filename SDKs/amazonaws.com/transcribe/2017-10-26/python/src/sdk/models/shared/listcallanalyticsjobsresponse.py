from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCallAnalyticsJobsResponse:
    call_analytics_job_summaries: Optional[List[CallAnalyticsJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallAnalyticsJobSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status: Optional[CallAnalyticsJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
