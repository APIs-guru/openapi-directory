from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ModelDeploymentStateEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    DEPLOYED = "DEPLOYED"
    UNDEPLOYED = "UNDEPLOYED"


@dataclass_json
@dataclass
class Model:
    r"""Model
    API proto representing a trained machine learning model.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetId') }})
    deployment_state: Optional[ModelDeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentState') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    image_classification_model_metadata: Optional[ImageClassificationModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationModelMetadata') }})
    image_object_detection_model_metadata: Optional[ImageObjectDetectionModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageObjectDetectionModelMetadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tables_model_metadata: Optional[TablesModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tablesModelMetadata') }})
    text_classification_model_metadata: Optional[TextClassificationModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textClassificationModelMetadata') }})
    text_extraction_model_metadata: Optional[TextExtractionModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textExtractionModelMetadata') }})
    text_sentiment_model_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSentimentModelMetadata') }})
    translation_model_metadata: Optional[TranslationModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translationModelMetadata') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    video_classification_model_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoClassificationModelMetadata') }})
    video_object_tracking_model_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoObjectTrackingModelMetadata') }})
    
