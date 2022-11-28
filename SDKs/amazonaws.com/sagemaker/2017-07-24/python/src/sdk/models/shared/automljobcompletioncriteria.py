from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoMlJobCompletionCriteria:
    r"""AutoMlJobCompletionCriteria
    How long a job is allowed to run, or how many candidates a job is allowed to generate.
    """
    
    max_auto_ml_job_runtime_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAutoMLJobRuntimeInSeconds') }})
    max_candidates: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCandidates') }})
    max_runtime_per_training_job_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRuntimePerTrainingJobInSeconds') }})
    
