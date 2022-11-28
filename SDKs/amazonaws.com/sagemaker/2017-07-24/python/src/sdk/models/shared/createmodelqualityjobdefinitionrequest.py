from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateModelQualityJobDefinitionRequest:
    job_definition_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDefinitionName') }})
    job_resources: MonitoringResources = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobResources') }})
    model_quality_app_specification: ModelQualityAppSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelQualityAppSpecification') }})
    model_quality_job_input: ModelQualityJobInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelQualityJobInput') }})
    model_quality_job_output_config: MonitoringOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelQualityJobOutputConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    model_quality_baseline_config: Optional[ModelQualityBaselineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelQualityBaselineConfig') }})
    network_config: Optional[MonitoringNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfig') }})
    stopping_condition: Optional[MonitoringStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
