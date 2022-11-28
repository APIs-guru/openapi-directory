from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LabelingJobOutput:
    r"""LabelingJobOutput
    Specifies the location of the output produced by the labeling job. 
    """
    
    output_dataset_s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDatasetS3Uri') }})
    final_active_learning_model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalActiveLearningModelArn') }})
    
