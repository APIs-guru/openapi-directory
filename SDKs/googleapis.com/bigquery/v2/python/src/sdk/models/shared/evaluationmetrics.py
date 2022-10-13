from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import arimaforecastingmetrics
from . import binaryclassificationmetrics
from . import clusteringmetrics
from . import dimensionalityreductionmetrics
from . import multiclassclassificationmetrics
from . import rankingmetrics
from . import regressionmetrics


@dataclass_json
@dataclass
class EvaluationMetrics:
    arima_forecasting_metrics: Optional[arimaforecastingmetrics.ArimaForecastingMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arimaForecastingMetrics' }})
    binary_classification_metrics: Optional[binaryclassificationmetrics.BinaryClassificationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryClassificationMetrics' }})
    clustering_metrics: Optional[clusteringmetrics.ClusteringMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusteringMetrics' }})
    dimensionality_reduction_metrics: Optional[dimensionalityreductionmetrics.DimensionalityReductionMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionalityReductionMetrics' }})
    multi_class_classification_metrics: Optional[multiclassclassificationmetrics.MultiClassClassificationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiClassClassificationMetrics' }})
    ranking_metrics: Optional[rankingmetrics.RankingMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rankingMetrics' }})
    regression_metrics: Optional[regressionmetrics.RegressionMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regressionMetrics' }})
    
