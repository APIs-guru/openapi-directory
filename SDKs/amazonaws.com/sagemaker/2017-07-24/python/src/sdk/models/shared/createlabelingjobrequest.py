from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import humantaskconfig
from . import labelingjobinputconfig
from . import labelingjobalgorithmsconfig
from . import labelingjoboutputconfig
from . import labelingjobstoppingconditions
from . import tag


@dataclass_json
@dataclass
class CreateLabelingJobRequest:
    human_task_config: humantaskconfig.HumanTaskConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanTaskConfig' }})
    input_config: labelingjobinputconfig.LabelingJobInputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputConfig' }})
    label_attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelAttributeName' }})
    label_category_config_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelCategoryConfigS3Uri' }})
    labeling_job_algorithms_config: Optional[labelingjobalgorithmsconfig.LabelingJobAlgorithmsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobAlgorithmsConfig' }})
    labeling_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobName' }})
    output_config: labelingjoboutputconfig.LabelingJobOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_conditions: Optional[labelingjobstoppingconditions.LabelingJobStoppingConditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingConditions' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
