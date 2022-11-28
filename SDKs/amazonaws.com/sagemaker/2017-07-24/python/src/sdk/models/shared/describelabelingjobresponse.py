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
class DescribeLabelingJobResponse:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    human_task_config: HumanTaskConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskConfig') }})
    input_config: LabelingJobInputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputConfig') }})
    job_reference_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobReferenceCode') }})
    label_counters: LabelCounters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelCounters') }})
    labeling_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobArn') }})
    labeling_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobName') }})
    labeling_job_status: LabelingJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobStatus') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output_config: LabelingJobOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    label_attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelAttributeName') }})
    label_category_config_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelCategoryConfigS3Uri') }})
    labeling_job_algorithms_config: Optional[LabelingJobAlgorithmsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobAlgorithmsConfig') }})
    labeling_job_output: Optional[LabelingJobOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobOutput') }})
    stopping_conditions: Optional[LabelingJobStoppingConditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingConditions') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
