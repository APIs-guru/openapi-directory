from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LabelingJobAlgorithmsConfig:
    r"""LabelingJobAlgorithmsConfig
    Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling.
    """
    
    labeling_job_algorithm_specification_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobAlgorithmSpecificationArn') }})
    initial_active_learning_model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialActiveLearningModelArn') }})
    labeling_job_resource_config: Optional[LabelingJobResourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobResourceConfig') }})
    
