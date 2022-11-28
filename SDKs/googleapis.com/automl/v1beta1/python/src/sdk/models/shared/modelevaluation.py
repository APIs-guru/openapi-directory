from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelEvaluation:
    r"""ModelEvaluation
    Evaluation results of a model.
    """
    
    annotation_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecId') }})
    classification_evaluation_metrics: Optional[ClassificationEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationEvaluationMetrics') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    evaluated_example_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluatedExampleCount') }})
    image_object_detection_evaluation_metrics: Optional[ImageObjectDetectionEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageObjectDetectionEvaluationMetrics') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    regression_evaluation_metrics: Optional[RegressionEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regressionEvaluationMetrics') }})
    text_extraction_evaluation_metrics: Optional[TextExtractionEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textExtractionEvaluationMetrics') }})
    text_sentiment_evaluation_metrics: Optional[TextSentimentEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSentimentEvaluationMetrics') }})
    translation_evaluation_metrics: Optional[TranslationEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translationEvaluationMetrics') }})
    video_object_tracking_evaluation_metrics: Optional[VideoObjectTrackingEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoObjectTrackingEvaluationMetrics') }})
    
