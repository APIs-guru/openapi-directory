from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import imageclassificationdatasetmetadata
from . import tablesdatasetmetadata
from . import textclassificationdatasetmetadata
from . import textsentimentdatasetmetadata
from . import translationdatasetmetadata


@dataclass_json
@dataclass
class Dataset:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    example_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exampleCount' }})
    image_classification_dataset_metadata: Optional[imageclassificationdatasetmetadata.ImageClassificationDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageClassificationDatasetMetadata' }})
    image_object_detection_dataset_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageObjectDetectionDatasetMetadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tables_dataset_metadata: Optional[tablesdatasetmetadata.TablesDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tablesDatasetMetadata' }})
    text_classification_dataset_metadata: Optional[textclassificationdatasetmetadata.TextClassificationDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textClassificationDatasetMetadata' }})
    text_extraction_dataset_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textExtractionDatasetMetadata' }})
    text_sentiment_dataset_metadata: Optional[textsentimentdatasetmetadata.TextSentimentDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSentimentDatasetMetadata' }})
    translation_dataset_metadata: Optional[translationdatasetmetadata.TranslationDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translationDatasetMetadata' }})
    video_classification_dataset_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoClassificationDatasetMetadata' }})
    video_object_tracking_dataset_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoObjectTrackingDatasetMetadata' }})
    
