from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import callanalyticsjobstatus_enum


@dataclass_json
@dataclass
class ListCallAnalyticsJobsRequest:
    job_name_contains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobNameContains' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[callanalyticsjobstatus_enum.CallAnalyticsJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
