from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLabelingJobRequest:
    human_task_config: HumanTaskConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskConfig') }})
    input_config: LabelingJobInputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputConfig') }})
    label_attribute_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelAttributeName') }})
    labeling_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobName') }})
    output_config: LabelingJobOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    label_category_config_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelCategoryConfigS3Uri') }})
    labeling_job_algorithms_config: Optional[LabelingJobAlgorithmsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobAlgorithmsConfig') }})
    stopping_conditions: Optional[LabelingJobStoppingConditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingConditions') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
