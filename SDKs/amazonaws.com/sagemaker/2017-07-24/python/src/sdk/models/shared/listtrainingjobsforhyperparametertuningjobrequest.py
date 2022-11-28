from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTrainingJobsForHyperParameterTuningJobRequest:
    hyper_parameter_tuning_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobName') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sort_by: Optional[TrainingJobSortByOptionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortBy') }})
    sort_order: Optional[SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    status_equals: Optional[TrainingJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusEquals') }})
    
