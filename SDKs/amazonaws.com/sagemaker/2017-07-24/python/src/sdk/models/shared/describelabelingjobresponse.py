from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import humantaskconfig
from . import labelingjobinputconfig
from . import labelcounters
from . import labelingjobalgorithmsconfig
from . import labelingjoboutput
from . import labelingjobstatus_enum
from . import labelingjoboutputconfig
from . import labelingjobstoppingconditions
from . import tag


@dataclass_json
@dataclass
class DescribeLabelingJobResponse:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    human_task_config: humantaskconfig.HumanTaskConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanTaskConfig' }})
    input_config: labelingjobinputconfig.LabelingJobInputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputConfig' }})
    job_reference_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobReferenceCode' }})
    label_attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelAttributeName' }})
    label_category_config_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelCategoryConfigS3Uri' }})
    label_counters: labelcounters.LabelCounters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelCounters' }})
    labeling_job_algorithms_config: Optional[labelingjobalgorithmsconfig.LabelingJobAlgorithmsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobAlgorithmsConfig' }})
    labeling_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobArn' }})
    labeling_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobName' }})
    labeling_job_output: Optional[labelingjoboutput.LabelingJobOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobOutput' }})
    labeling_job_status: labelingjobstatus_enum.LabelingJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobStatus' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output_config: labelingjoboutputconfig.LabelingJobOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_conditions: Optional[labelingjobstoppingconditions.LabelingJobStoppingConditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingConditions' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
