from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsAPIGatewayCanarySettings:
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentId' }})
    percent_traffic: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PercentTraffic' }})
    stage_variable_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StageVariableOverrides' }})
    use_stage_cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseStageCache' }})
    
