from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEdgePackagingJobsResponse:
    edge_packaging_job_summaries: List[EdgePackagingJobSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EdgePackagingJobSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
