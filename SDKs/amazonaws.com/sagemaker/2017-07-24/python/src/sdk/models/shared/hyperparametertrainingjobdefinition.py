from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HyperParameterTrainingJobDefinition:
    r"""HyperParameterTrainingJobDefinition
    Defines the training jobs launched by a hyperparameter tuning job.
    """
    
    algorithm_specification: HyperParameterAlgorithmSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmSpecification') }})
    output_data_config: OutputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    resource_config: ResourceConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    stopping_condition: StoppingCondition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    checkpoint_config: Optional[CheckpointConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointConfig') }})
    definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefinitionName') }})
    enable_inter_container_traffic_encryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableInterContainerTrafficEncryption') }})
    enable_managed_spot_training: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableManagedSpotTraining') }})
    enable_network_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableNetworkIsolation') }})
    hyper_parameter_ranges: Optional[ParameterRanges] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterRanges') }})
    input_data_config: Optional[List[Channel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    retry_strategy: Optional[RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryStrategy') }})
    static_hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StaticHyperParameters') }})
    tuning_objective: Optional[HyperParameterTuningJobObjective] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TuningObjective') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
