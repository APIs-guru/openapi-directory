from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hyperparameteralgorithmspecification
from . import checkpointconfig
from . import parameterranges
from . import channel
from . import outputdataconfig
from . import resourceconfig
from . import retrystrategy
from . import stoppingcondition
from . import hyperparametertuningjobobjective
from . import vpcconfig


@dataclass_json
@dataclass
class HyperParameterTrainingJobDefinition:
    algorithm_specification: hyperparameteralgorithmspecification.HyperParameterAlgorithmSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmSpecification' }})
    checkpoint_config: Optional[checkpointconfig.CheckpointConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckpointConfig' }})
    definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefinitionName' }})
    enable_inter_container_traffic_encryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableInterContainerTrafficEncryption' }})
    enable_managed_spot_training: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableManagedSpotTraining' }})
    enable_network_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableNetworkIsolation' }})
    hyper_parameter_ranges: Optional[parameterranges.ParameterRanges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterRanges' }})
    input_data_config: Optional[List[channel.Channel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    output_data_config: outputdataconfig.OutputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    resource_config: resourceconfig.ResourceConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceConfig' }})
    retry_strategy: Optional[retrystrategy.RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryStrategy' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    static_hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StaticHyperParameters' }})
    stopping_condition: stoppingcondition.StoppingCondition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    tuning_objective: Optional[hyperparametertuningjobobjective.HyperParameterTuningJobObjective] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TuningObjective' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
