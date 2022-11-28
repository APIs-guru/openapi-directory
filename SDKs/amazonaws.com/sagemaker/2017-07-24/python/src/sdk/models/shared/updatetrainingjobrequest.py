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
class UpdateTrainingJobRequest:
    training_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobName') }})
    profiler_config: Optional[ProfilerConfigForUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilerConfig') }})
    profiler_rule_configurations: Optional[List[ProfilerRuleConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilerRuleConfigurations') }})
    
