from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import globalexplanation
from . import datasplitresult
from . import evaluationmetrics
from . import globalexplanation
from . import iterationresult
from . import trainingoptions


@dataclass_json
@dataclass
class TrainingRun:
    class_level_global_explanations: Optional[List[globalexplanation.GlobalExplanation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classLevelGlobalExplanations' }})
    data_split_result: Optional[datasplitresult.DataSplitResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSplitResult' }})
    evaluation_metrics: Optional[evaluationmetrics.EvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMetrics' }})
    model_level_global_explanation: Optional[globalexplanation.GlobalExplanation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelLevelGlobalExplanation' }})
    results: Optional[List[iterationresult.IterationResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    training_options: Optional[trainingoptions.TrainingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingOptions' }})
    training_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingStartTime' }})
    vertex_ai_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertexAiModelId' }})
    vertex_ai_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertexAiModelVersion' }})
    
