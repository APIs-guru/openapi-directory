from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import labelingjobinputconfig
from . import labelcounters
from . import labelingjoboutput
from . import labelingjobstatus_enum


@dataclass_json
@dataclass
class LabelingJobSummary:
    annotation_consolidation_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnnotationConsolidationLambdaArn' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    input_config: Optional[labelingjobinputconfig.LabelingJobInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputConfig' }})
    label_counters: labelcounters.LabelCounters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelCounters' }})
    labeling_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobArn' }})
    labeling_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobName' }})
    labeling_job_output: Optional[labelingjoboutput.LabelingJobOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobOutput' }})
    labeling_job_status: labelingjobstatus_enum.LabelingJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobStatus' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pre_human_task_lambda_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreHumanTaskLambdaArn' }})
    workteam_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkteamArn' }})
    
