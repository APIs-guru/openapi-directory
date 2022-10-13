from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import batchstrategy_enum
from . import dataprocessing
from . import experimentconfig
from . import modelclientconfig
from . import tag
from . import transforminput
from . import transformjobstatus_enum
from . import transformoutput
from . import transformresources


@dataclass_json
@dataclass
class TransformJob:
    auto_ml_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobArn' }})
    batch_strategy: Optional[batchstrategy_enum.BatchStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchStrategy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_processing: Optional[dataprocessing.DataProcessing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataProcessing' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    experiment_config: Optional[experimentconfig.ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExperimentConfig' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    labeling_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobArn' }})
    max_concurrent_transforms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrentTransforms' }})
    max_payload_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxPayloadInMB' }})
    model_client_config: Optional[modelclientconfig.ModelClientConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelClientConfig' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    transform_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transform_input: Optional[transforminput.TransformInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformInput' }})
    transform_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJobArn' }})
    transform_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJobName' }})
    transform_job_status: Optional[transformjobstatus_enum.TransformJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJobStatus' }})
    transform_output: Optional[transformoutput.TransformOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformOutput' }})
    transform_resources: Optional[transformresources.TransformResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformResources' }})
    transform_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
