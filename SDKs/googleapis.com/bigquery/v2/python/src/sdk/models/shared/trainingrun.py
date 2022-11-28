from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrainingRun:
    r"""TrainingRun
    Information about a single training query run for the model.
    """
    
    class_level_global_explanations: Optional[List[GlobalExplanation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classLevelGlobalExplanations') }})
    data_split_result: Optional[DataSplitResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSplitResult') }})
    evaluation_metrics: Optional[EvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMetrics') }})
    model_level_global_explanation: Optional[GlobalExplanation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelLevelGlobalExplanation') }})
    results: Optional[List[IterationResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    training_options: Optional[TrainingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingOptions') }})
    training_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingStartTime') }})
    vertex_ai_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertexAiModelId') }})
    vertex_ai_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertexAiModelVersion') }})
    

@dataclass_json
@dataclass
class TrainingRunInput:
    r"""TrainingRunInput
    Information about a single training query run for the model.
    """
    
    data_split_result: Optional[DataSplitResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSplitResult') }})
    evaluation_metrics: Optional[EvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMetrics') }})
    model_level_global_explanation: Optional[GlobalExplanation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelLevelGlobalExplanation') }})
    training_options: Optional[TrainingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingOptions') }})
    vertex_ai_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertexAiModelId') }})
    
