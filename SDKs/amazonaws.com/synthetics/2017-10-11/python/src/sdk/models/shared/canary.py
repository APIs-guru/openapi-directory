from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Canary:
    r"""Canary
    This structure contains all information about one canary in your account.
    """
    
    artifact_s3_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactS3Location') }})
    code: Optional[CanaryCodeOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    engine_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineArn') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    failure_retention_period_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureRetentionPeriodInDays') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    run_config: Optional[CanaryRunConfigOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunConfig') }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeVersion') }})
    schedule: Optional[CanaryScheduleOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    status: Optional[CanaryStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    success_retention_period_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessRetentionPeriodInDays') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    timeline: Optional[CanaryTimeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeline') }})
    visual_reference: Optional[VisualReferenceOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VisualReference') }})
    vpc_config: Optional[VpcConfigOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
