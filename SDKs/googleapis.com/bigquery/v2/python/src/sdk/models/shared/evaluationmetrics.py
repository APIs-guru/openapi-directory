from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EvaluationMetrics:
    r"""EvaluationMetrics
    Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
    """
    
    arima_forecasting_metrics: Optional[ArimaForecastingMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arimaForecastingMetrics') }})
    binary_classification_metrics: Optional[BinaryClassificationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryClassificationMetrics') }})
    clustering_metrics: Optional[ClusteringMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusteringMetrics') }})
    dimensionality_reduction_metrics: Optional[DimensionalityReductionMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionalityReductionMetrics') }})
    multi_class_classification_metrics: Optional[MultiClassClassificationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiClassClassificationMetrics') }})
    ranking_metrics: Optional[RankingMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rankingMetrics') }})
    regression_metrics: Optional[RegressionMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regressionMetrics') }})
    
