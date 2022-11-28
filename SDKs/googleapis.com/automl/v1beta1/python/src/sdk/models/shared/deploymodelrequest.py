from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeployModelRequest:
    r"""DeployModelRequest
    Request message for AutoMl.DeployModel.
    """
    
    image_classification_model_deployment_metadata: Optional[ImageClassificationModelDeploymentMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationModelDeploymentMetadata') }})
    image_object_detection_model_deployment_metadata: Optional[ImageObjectDetectionModelDeploymentMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageObjectDetectionModelDeploymentMetadata') }})
    
