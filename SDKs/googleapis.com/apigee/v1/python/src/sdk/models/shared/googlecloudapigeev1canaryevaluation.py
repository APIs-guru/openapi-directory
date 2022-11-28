from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1CanaryEvaluationInput:
    r"""GoogleCloudApigeeV1CanaryEvaluationInput
    CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.
    """
    
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    metric_labels: Optional[GoogleCloudApigeeV1CanaryEvaluationMetricLabels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricLabels') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    treatment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treatment') }})
    
