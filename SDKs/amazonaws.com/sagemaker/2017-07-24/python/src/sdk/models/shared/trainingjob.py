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
class TrainingJob:
    r"""TrainingJob
    Contains information about a training job.
    """
    
    algorithm_specification: Optional[AlgorithmSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmSpecification') }})
    auto_ml_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobArn') }})
    billable_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillableTimeInSeconds') }})
    checkpoint_config: Optional[CheckpointConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointConfig') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
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
    model_artifacts: Optional[ModelArtifacts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArtifacts') }})
    output_data_config: Optional[OutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    resource_config: Optional[ResourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceConfig') }})
    retry_strategy: Optional[RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryStrategy') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    secondary_status: Optional[SecondaryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryStatus') }})
    secondary_status_transitions: Optional[List[SecondaryStatusTransition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryStatusTransitions') }})
    stopping_condition: Optional[StoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    tensor_board_output_config: Optional[TensorBoardOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TensorBoardOutputConfig') }})
    training_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobArn') }})
    training_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobName') }})
    training_job_status: Optional[TrainingJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobStatus') }})
    training_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingTimeInSeconds') }})
    tuning_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TuningJobArn') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
