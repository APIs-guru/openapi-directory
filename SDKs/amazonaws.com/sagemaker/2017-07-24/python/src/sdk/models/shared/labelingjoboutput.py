from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LabelingJobOutput:
    final_active_learning_model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalActiveLearningModelArn' }})
    output_dataset_s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDatasetS3Uri' }})
    
