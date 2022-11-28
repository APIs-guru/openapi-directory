from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTransformJobResponse:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    transform_input: TransformInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformInput') }})
    transform_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobArn') }})
    transform_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobName') }})
    transform_job_status: TransformJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobStatus') }})
    transform_resources: TransformResources = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformResources') }})
    auto_ml_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobArn') }})
    batch_strategy: Optional[BatchStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchStrategy') }})
    data_processing: Optional[DataProcessing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataProcessing') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    experiment_config: Optional[ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentConfig') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    labeling_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobArn') }})
    max_concurrent_transforms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrentTransforms') }})
    max_payload_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxPayloadInMB') }})
    model_client_config: Optional[ModelClientConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelClientConfig') }})
    transform_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transform_output: Optional[TransformOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformOutput') }})
    transform_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
