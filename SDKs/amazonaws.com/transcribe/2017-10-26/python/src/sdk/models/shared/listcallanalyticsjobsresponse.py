from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import callanalyticsjobsummary
from . import callanalyticsjobstatus_enum


@dataclass_json
@dataclass
class ListCallAnalyticsJobsResponse:
    call_analytics_job_summaries: Optional[List[callanalyticsjobsummary.CallAnalyticsJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CallAnalyticsJobSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[callanalyticsjobstatus_enum.CallAnalyticsJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
