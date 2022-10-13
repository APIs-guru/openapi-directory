from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageclassificationmodeldeploymentmetadata
from . import imageobjectdetectionmodeldeploymentmetadata


@dataclass_json
@dataclass
class DeployModelRequest:
    image_classification_model_deployment_metadata: Optional[imageclassificationmodeldeploymentmetadata.ImageClassificationModelDeploymentMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageClassificationModelDeploymentMetadata' }})
    image_object_detection_model_deployment_metadata: Optional[imageobjectdetectionmodeldeploymentmetadata.ImageObjectDetectionModelDeploymentMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageObjectDetectionModelDeploymentMetadata' }})
    
