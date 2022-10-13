from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classificationannotation
from . import imageobjectdetectionannotation
from . import tablesannotation
from . import textextractionannotation
from . import textsentimentannotation
from . import translationannotation
from . import videoclassificationannotation
from . import videoobjecttrackingannotation


@dataclass_json
@dataclass
class AnnotationPayload:
    annotation_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecId' }})
    classification: Optional[classificationannotation.ClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    image_object_detection: Optional[imageobjectdetectionannotation.ImageObjectDetectionAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageObjectDetection' }})
    tables: Optional[tablesannotation.TablesAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tables' }})
    text_extraction: Optional[textextractionannotation.TextExtractionAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textExtraction' }})
    text_sentiment: Optional[textsentimentannotation.TextSentimentAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSentiment' }})
    translation: Optional[translationannotation.TranslationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translation' }})
    video_classification: Optional[videoclassificationannotation.VideoClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoClassification' }})
    video_object_tracking: Optional[videoobjecttrackingannotation.VideoObjectTrackingAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoObjectTracking' }})
    
