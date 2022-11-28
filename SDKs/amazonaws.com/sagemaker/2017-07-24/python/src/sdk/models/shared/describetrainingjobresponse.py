from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTrainingJobResponse:
    algorithm_specification: AlgorithmSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmSpecification') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_artifacts: ModelArtifacts = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArtifacts') }})
    resource_config: ResourceConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceConfig') }})
    secondary_status: SecondaryStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryStatus') }})
    stopping_condition: StoppingCondition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    training_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobArn') }})
    training_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobName') }})
    training_job_status: TrainingJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobStatus') }})
    auto_ml_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobArn') }})
    billable_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillableTimeInSeconds') }})
    checkpoint_config: Optional[CheckpointConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointConfig') }})
    debug_hook_config: Optional[DebugHookConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebugHookConfig') }})
    debug_rule_configurations: Optional[List[DebugRuleConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebugRuleConfigurations') }})
    debug_rule_evaluation_statuses: Optional[List[DebugRuleEvaluationStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebugRuleEvaluationStatuses') }})
    enable_inter_container_traffic_encryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableInterContainerTrafficEncryption') }})
    enable_managed_spot_training: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableManagedSpotTraining') }})
    enable_network_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableNetworkIsolation') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    experiment_config: Optional[ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentConfig') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    final_metric_data_list: Optional[List[MetricData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalMetricDataList') }})
    hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameters') }})
    input_data_config: Optional[List[Channel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    labeling_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobArn') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output_data_config: Optional[OutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    profiler_config: Optional[ProfilerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilerConfig') }})
    profiler_rule_configurations: Optional[List[ProfilerRuleConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilerRuleConfigurations') }})
    profiler_rule_evaluation_statuses: Optional[List[ProfilerRuleEvaluationStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilerRuleEvaluationStatuses') }})
    profiling_status: Optional[ProfilingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfilingStatus') }})
    retry_strategy: Optional[RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryStrategy') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    secondary_status_transitions: Optional[List[SecondaryStatusTransition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryStatusTransitions') }})
    tensor_board_output_config: Optional[TensorBoardOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TensorBoardOutputConfig') }})
    training_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingTimeInSeconds') }})
    tuning_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TuningJobArn') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
