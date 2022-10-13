from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageClassificationModelMetadata:
    base_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseModelId' }})
    model_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelType' }})
    node_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCount' }})
    node_qps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeQps' }})
    stop_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopReason' }})
    train_budget: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainBudget' }})
    train_cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainCost' }})
    
