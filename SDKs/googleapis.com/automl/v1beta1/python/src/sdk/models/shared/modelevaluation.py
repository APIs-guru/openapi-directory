from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classificationevaluationmetrics
from . import imageobjectdetectionevaluationmetrics
from . import regressionevaluationmetrics
from . import textextractionevaluationmetrics
from . import textsentimentevaluationmetrics
from . import translationevaluationmetrics
from . import videoobjecttrackingevaluationmetrics


@dataclass_json
@dataclass
class ModelEvaluation:
    annotation_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecId' }})
    classification_evaluation_metrics: Optional[classificationevaluationmetrics.ClassificationEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationEvaluationMetrics' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    evaluated_example_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluatedExampleCount' }})
    image_object_detection_evaluation_metrics: Optional[imageobjectdetectionevaluationmetrics.ImageObjectDetectionEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageObjectDetectionEvaluationMetrics' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    regression_evaluation_metrics: Optional[regressionevaluationmetrics.RegressionEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regressionEvaluationMetrics' }})
    text_extraction_evaluation_metrics: Optional[textextractionevaluationmetrics.TextExtractionEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textExtractionEvaluationMetrics' }})
    text_sentiment_evaluation_metrics: Optional[textsentimentevaluationmetrics.TextSentimentEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSentimentEvaluationMetrics' }})
    translation_evaluation_metrics: Optional[translationevaluationmetrics.TranslationEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translationEvaluationMetrics' }})
    video_object_tracking_evaluation_metrics: Optional[videoobjecttrackingevaluationmetrics.VideoObjectTrackingEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoObjectTrackingEvaluationMetrics' }})
    
