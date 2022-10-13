from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageObjectDetectionModelMetadata:
    model_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelType' }})
    node_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCount' }})
    node_qps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeQps' }})
    stop_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopReason' }})
    train_budget_milli_node_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainBudgetMilliNodeHours' }})
    train_cost_milli_node_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainCostMilliNodeHours' }})
    
