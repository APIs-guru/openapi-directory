from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsAPIGatewayCanarySettings:
    r"""AwsAPIGatewayCanarySettings
    Contains information about settings for canary deployment in the stage.
    """
    
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentId') }})
    percent_traffic: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PercentTraffic') }})
    stage_variable_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StageVariableOverrides') }})
    use_stage_cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseStageCache') }})
    
