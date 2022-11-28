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
class ProcessingJob:
    r"""ProcessingJob
    An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html\">Process Data and Evaluate Models</a>.
    """
    
    app_specification: Optional[AppSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppSpecification') }})
    auto_ml_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobArn') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    exit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExitMessage') }})
    experiment_config: Optional[ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentConfig') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    monitoring_schedule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleArn') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfig') }})
    processing_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    processing_inputs: Optional[List[ProcessingInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingInputs') }})
    processing_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingJobArn') }})
    processing_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingJobName') }})
    processing_job_status: Optional[ProcessingJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingJobStatus') }})
    processing_output_config: Optional[ProcessingOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingOutputConfig') }})
    processing_resources: Optional[ProcessingResources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingResources') }})
    processing_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    stopping_condition: Optional[ProcessingStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    training_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobArn') }})
    
