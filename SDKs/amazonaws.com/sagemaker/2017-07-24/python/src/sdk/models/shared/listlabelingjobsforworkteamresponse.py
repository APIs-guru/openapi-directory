from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import labelingjobforworkteamsummary


@dataclass_json
@dataclass
class ListLabelingJobsForWorkteamResponse:
    labeling_job_summary_list: List[labelingjobforworkteamsummary.LabelingJobForWorkteamSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
