from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateModelExplainabilityJobDefinitionRequest:
    job_definition_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDefinitionName') }})
    job_resources: MonitoringResources = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobResources') }})
    model_explainability_app_specification: ModelExplainabilityAppSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelExplainabilityAppSpecification') }})
    model_explainability_job_input: ModelExplainabilityJobInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelExplainabilityJobInput') }})
    model_explainability_job_output_config: MonitoringOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelExplainabilityJobOutputConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    model_explainability_baseline_config: Optional[ModelExplainabilityBaselineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelExplainabilityBaselineConfig') }})
    network_config: Optional[MonitoringNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfig') }})
    stopping_condition: Optional[MonitoringStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
