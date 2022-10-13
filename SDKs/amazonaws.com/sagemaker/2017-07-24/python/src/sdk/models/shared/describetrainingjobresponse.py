from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import algorithmspecification
from . import checkpointconfig
from . import debughookconfig
from . import debugruleconfiguration
from . import debugruleevaluationstatus
from . import experimentconfig
from . import metricdata
from . import channel
from . import modelartifacts
from . import outputdataconfig
from . import profilerconfig
from . import profilerruleconfiguration
from . import profilerruleevaluationstatus
from . import profilingstatus_enum
from . import resourceconfig
from . import retrystrategy
from . import secondarystatus_enum
from . import secondarystatustransition
from . import stoppingcondition
from . import tensorboardoutputconfig
from . import trainingjobstatus_enum
from . import vpcconfig


@dataclass_json
@dataclass
class DescribeTrainingJobResponse:
    algorithm_specification: algorithmspecification.AlgorithmSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmSpecification' }})
    auto_ml_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobArn' }})
    billable_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillableTimeInSeconds' }})
    checkpoint_config: Optional[checkpointconfig.CheckpointConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckpointConfig' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    debug_hook_config: Optional[debughookconfig.DebugHookConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebugHookConfig' }})
    debug_rule_configurations: Optional[List[debugruleconfiguration.DebugRuleConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebugRuleConfigurations' }})
    debug_rule_evaluation_statuses: Optional[List[debugruleevaluationstatus.DebugRuleEvaluationStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebugRuleEvaluationStatuses' }})
    enable_inter_container_traffic_encryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableInterContainerTrafficEncryption' }})
    enable_managed_spot_training: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableManagedSpotTraining' }})
    enable_network_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableNetworkIsolation' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    experiment_config: Optional[experimentconfig.ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExperimentConfig' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    final_metric_data_list: Optional[List[metricdata.MetricData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalMetricDataList' }})
    hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameters' }})
    input_data_config: Optional[List[channel.Channel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    labeling_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobArn' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_artifacts: modelartifacts.ModelArtifacts = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArtifacts' }})
    output_data_config: Optional[outputdataconfig.OutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    profiler_config: Optional[profilerconfig.ProfilerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfilerConfig' }})
    profiler_rule_configurations: Optional[List[profilerruleconfiguration.ProfilerRuleConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfilerRuleConfigurations' }})
    profiler_rule_evaluation_statuses: Optional[List[profilerruleevaluationstatus.ProfilerRuleEvaluationStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfilerRuleEvaluationStatuses' }})
    profiling_status: Optional[profilingstatus_enum.ProfilingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfilingStatus' }})
    resource_config: resourceconfig.ResourceConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceConfig' }})
    retry_strategy: Optional[retrystrategy.RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryStrategy' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    secondary_status: secondarystatus_enum.SecondaryStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryStatus' }})
    secondary_status_transitions: Optional[List[secondarystatustransition.SecondaryStatusTransition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryStatusTransitions' }})
    stopping_condition: stoppingcondition.StoppingCondition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    tensor_board_output_config: Optional[tensorboardoutputconfig.TensorBoardOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TensorBoardOutputConfig' }})
    training_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobArn' }})
    training_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobName' }})
    training_job_status: trainingjobstatus_enum.TrainingJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobStatus' }})
    training_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingTimeInSeconds' }})
    tuning_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TuningJobArn' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
