from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1canaryevaluationmetriclabels

class GoogleCloudApigeeV1CanaryEvaluationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"

class GoogleCloudApigeeV1CanaryEvaluationVerdictEnum(str, Enum):
    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    NONE = "NONE"
    FAIL = "FAIL"
    PASS = "PASS"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1CanaryEvaluation:
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    metric_labels: Optional[googlecloudapigeev1canaryevaluationmetriclabels.GoogleCloudApigeeV1CanaryEvaluationMetricLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricLabels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GoogleCloudApigeeV1CanaryEvaluationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    treatment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treatment' }})
    verdict: Optional[GoogleCloudApigeeV1CanaryEvaluationVerdictEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verdict' }})
    
