from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDataQualityJobDefinitionRequest:
    data_quality_app_specification: DataQualityAppSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataQualityAppSpecification') }})
    data_quality_job_input: DataQualityJobInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataQualityJobInput') }})
    data_quality_job_output_config: MonitoringOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataQualityJobOutputConfig') }})
    job_definition_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDefinitionName') }})
    job_resources: MonitoringResources = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobResources') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    data_quality_baseline_config: Optional[DataQualityBaselineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataQualityBaselineConfig') }})
    network_config: Optional[MonitoringNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfig') }})
    stopping_condition: Optional[MonitoringStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
