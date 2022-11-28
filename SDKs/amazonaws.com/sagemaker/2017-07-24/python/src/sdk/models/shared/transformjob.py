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
class TransformJob:
    r"""TransformJob
    A batch transform job. For information about SageMaker batch transform, see <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html\">Use Batch Transform</a>.
    """
    
    auto_ml_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobArn') }})
    batch_strategy: Optional[BatchStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchStrategy') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_processing: Optional[DataProcessing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataProcessing') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    experiment_config: Optional[ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentConfig') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    labeling_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobArn') }})
    max_concurrent_transforms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrentTransforms') }})
    max_payload_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxPayloadInMB') }})
    model_client_config: Optional[ModelClientConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelClientConfig') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    transform_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transform_input: Optional[TransformInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformInput') }})
    transform_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobArn') }})
    transform_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobName') }})
    transform_job_status: Optional[TransformJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobStatus') }})
    transform_output: Optional[TransformOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformOutput') }})
    transform_resources: Optional[TransformResources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformResources') }})
    transform_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
