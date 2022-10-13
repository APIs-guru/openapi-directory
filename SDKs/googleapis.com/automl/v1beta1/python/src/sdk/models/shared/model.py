from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import imageclassificationmodelmetadata
from . import imageobjectdetectionmodelmetadata
from . import tablesmodelmetadata
from . import textclassificationmodelmetadata
from . import textextractionmodelmetadata
from . import translationmodelmetadata

class ModelDeploymentStateEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    DEPLOYED = "DEPLOYED"
    UNDEPLOYED = "UNDEPLOYED"


@dataclass_json
@dataclass
class Model:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetId' }})
    deployment_state: Optional[ModelDeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentState' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    image_classification_model_metadata: Optional[imageclassificationmodelmetadata.ImageClassificationModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageClassificationModelMetadata' }})
    image_object_detection_model_metadata: Optional[imageobjectdetectionmodelmetadata.ImageObjectDetectionModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageObjectDetectionModelMetadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tables_model_metadata: Optional[tablesmodelmetadata.TablesModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tablesModelMetadata' }})
    text_classification_model_metadata: Optional[textclassificationmodelmetadata.TextClassificationModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textClassificationModelMetadata' }})
    text_extraction_model_metadata: Optional[textextractionmodelmetadata.TextExtractionModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textExtractionModelMetadata' }})
    text_sentiment_model_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSentimentModelMetadata' }})
    translation_model_metadata: Optional[translationmodelmetadata.TranslationModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translationModelMetadata' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    video_classification_model_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoClassificationModelMetadata' }})
    video_object_tracking_model_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoObjectTrackingModelMetadata' }})
    
