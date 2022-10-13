from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import canarycodeoutput
from . import canaryrunconfigoutput
from . import canaryscheduleoutput
from . import canarystatus
from . import canarytimeline
from . import visualreferenceoutput
from . import vpcconfigoutput


@dataclass_json
@dataclass
class Canary:
    artifact_s3_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactS3Location' }})
    code: Optional[canarycodeoutput.CanaryCodeOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    engine_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineArn' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    failure_retention_period_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureRetentionPeriodInDays' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    run_config: Optional[canaryrunconfigoutput.CanaryRunConfigOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunConfig' }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeVersion' }})
    schedule: Optional[canaryscheduleoutput.CanaryScheduleOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    status: Optional[canarystatus.CanaryStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    success_retention_period_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessRetentionPeriodInDays' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    timeline: Optional[canarytimeline.CanaryTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeline' }})
    visual_reference: Optional[visualreferenceoutput.VisualReferenceOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VisualReference' }})
    vpc_config: Optional[vpcconfigoutput.VpcConfigOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
