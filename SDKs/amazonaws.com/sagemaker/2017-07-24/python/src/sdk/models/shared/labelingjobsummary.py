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
class LabelingJobSummary:
    r"""LabelingJobSummary
    Provides summary information about a labeling job.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    label_counters: LabelCounters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelCounters') }})
    labeling_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobArn') }})
    labeling_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobName') }})
    labeling_job_status: LabelingJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobStatus') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pre_human_task_lambda_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreHumanTaskLambdaArn') }})
    workteam_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkteamArn') }})
    annotation_consolidation_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnotationConsolidationLambdaArn') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    input_config: Optional[LabelingJobInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputConfig') }})
    labeling_job_output: Optional[LabelingJobOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobOutput') }})
    
