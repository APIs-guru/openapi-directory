from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnnotationPayload:
    r"""AnnotationPayload
    Contains annotation information that is relevant to AutoML.
    """
    
    annotation_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecId') }})
    classification: Optional[ClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    image_object_detection: Optional[ImageObjectDetectionAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageObjectDetection') }})
    tables: Optional[TablesAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tables') }})
    text_extraction: Optional[TextExtractionAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textExtraction') }})
    text_sentiment: Optional[TextSentimentAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSentiment') }})
    translation: Optional[TranslationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translation') }})
    video_classification: Optional[VideoClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoClassification') }})
    video_object_tracking: Optional[VideoObjectTrackingAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoObjectTracking') }})
    
