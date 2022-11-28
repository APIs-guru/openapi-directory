from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Dataset:
    r"""Dataset
    A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    example_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exampleCount') }})
    image_classification_dataset_metadata: Optional[ImageClassificationDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationDatasetMetadata') }})
    image_object_detection_dataset_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageObjectDetectionDatasetMetadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tables_dataset_metadata: Optional[TablesDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tablesDatasetMetadata') }})
    text_classification_dataset_metadata: Optional[TextClassificationDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textClassificationDatasetMetadata') }})
    text_extraction_dataset_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textExtractionDatasetMetadata') }})
    text_sentiment_dataset_metadata: Optional[TextSentimentDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSentimentDatasetMetadata') }})
    translation_dataset_metadata: Optional[TranslationDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translationDatasetMetadata') }})
    video_classification_dataset_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoClassificationDatasetMetadata') }})
    video_object_tracking_dataset_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoObjectTrackingDatasetMetadata') }})
    
