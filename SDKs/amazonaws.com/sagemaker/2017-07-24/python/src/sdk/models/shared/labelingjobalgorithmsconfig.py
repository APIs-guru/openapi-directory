from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import labelingjobresourceconfig


@dataclass_json
@dataclass
class LabelingJobAlgorithmsConfig:
    initial_active_learning_model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitialActiveLearningModelArn' }})
    labeling_job_algorithm_specification_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobAlgorithmSpecificationArn' }})
    labeling_job_resource_config: Optional[labelingjobresourceconfig.LabelingJobResourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobResourceConfig' }})
    
