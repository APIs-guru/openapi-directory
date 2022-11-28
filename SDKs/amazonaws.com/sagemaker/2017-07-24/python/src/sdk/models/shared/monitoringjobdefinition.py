from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringJobDefinition:
    r"""MonitoringJobDefinition
    Defines the monitoring job.
    """
    
    monitoring_app_specification: MonitoringAppSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringAppSpecification') }})
    monitoring_inputs: List[MonitoringInput] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringInputs') }})
    monitoring_output_config: MonitoringOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringOutputConfig') }})
    monitoring_resources: MonitoringResources = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringResources') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    baseline_config: Optional[MonitoringBaselineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineConfig') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfig') }})
    stopping_condition: Optional[MonitoringStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    
