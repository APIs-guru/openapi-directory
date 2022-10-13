from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateLabelingJobResponse:
    labeling_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobArn' }})
    
