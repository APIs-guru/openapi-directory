from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTrainingJobRequest:
    algorithm_specification: AlgorithmSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmSpecification') }})
    output_data_config: OutputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    resource_config: ResourceConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    stopping_condition: StoppingCondition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    training_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobName') }})
    checkpoint_config: Optional[CheckpointConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointConfig') }})
    debug_hook_config: Optional[DebugHookConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebugHookConfig') }})
    debug_rule_configurations: Optional[List[DebugRuleConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebugRuleConfigurations') }})
    enable_inter_container_traffic_encryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableInterContainerTrafficEncryption') }})
    enable_managed_spot_training: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableManagedSpotTraining') }})
    enable_network_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableNetworkIsolation') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    experiment_config: Optional[ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentConfig') }})
    hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameters') }})
    input_data_config: Optional[List[Channel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    profiler_config: Optional[ProfilerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilerConfig') }})
    profiler_rule_configurations: Optional[List[ProfilerRuleConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilerRuleConfigurations') }})
    retry_strategy: Optional[RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryStrategy') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    tensor_board_output_config: Optional[TensorBoardOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TensorBoardOutputConfig') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
