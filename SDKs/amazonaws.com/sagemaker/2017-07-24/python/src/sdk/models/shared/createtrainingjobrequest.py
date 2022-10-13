from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import algorithmspecification
from . import checkpointconfig
from . import debughookconfig
from . import debugruleconfiguration
from . import experimentconfig
from . import channel
from . import outputdataconfig
from . import profilerconfig
from . import profilerruleconfiguration
from . import resourceconfig
from . import retrystrategy
from . import stoppingcondition
from . import tag
from . import tensorboardoutputconfig
from . import vpcconfig


@dataclass_json
@dataclass
class CreateTrainingJobRequest:
    algorithm_specification: algorithmspecification.AlgorithmSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmSpecification' }})
    checkpoint_config: Optional[checkpointconfig.CheckpointConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckpointConfig' }})
    debug_hook_config: Optional[debughookconfig.DebugHookConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebugHookConfig' }})
    debug_rule_configurations: Optional[List[debugruleconfiguration.DebugRuleConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebugRuleConfigurations' }})
    enable_inter_container_traffic_encryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableInterContainerTrafficEncryption' }})
    enable_managed_spot_training: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableManagedSpotTraining' }})
    enable_network_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableNetworkIsolation' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    experiment_config: Optional[experimentconfig.ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExperimentConfig' }})
    hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameters' }})
    input_data_config: Optional[List[channel.Channel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    output_data_config: outputdataconfig.OutputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    profiler_config: Optional[profilerconfig.ProfilerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfilerConfig' }})
    profiler_rule_configurations: Optional[List[profilerruleconfiguration.ProfilerRuleConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfilerRuleConfigurations' }})
    resource_config: resourceconfig.ResourceConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceConfig' }})
    retry_strategy: Optional[retrystrategy.RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryStrategy' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_condition: stoppingcondition.StoppingCondition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    tensor_board_output_config: Optional[tensorboardoutputconfig.TensorBoardOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TensorBoardOutputConfig' }})
    training_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobName' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
