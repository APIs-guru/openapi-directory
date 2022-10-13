from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionmetric
from . import evaluationcycle


@dataclass_json
@dataclass
class GetCustomerServiceMetricResponse:
    dimension_metrics: Optional[List[dimensionmetric.DimensionMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionMetrics' }})
    evaluation_cycle: Optional[evaluationcycle.EvaluationCycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationCycle' }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    
