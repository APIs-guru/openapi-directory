from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1CanaryEvaluationMetricLabels:
    r"""GoogleCloudApigeeV1CanaryEvaluationMetricLabels
    Labels that can be used to filter Apigee metrics.
    """
    
    env: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_id') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
