from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageObjectDetectionModelMetadata:
    r"""ImageObjectDetectionModelMetadata
    Model metadata specific to image object detection.
    """
    
    model_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelType') }})
    node_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    node_qps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeQps') }})
    stop_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopReason') }})
    train_budget_milli_node_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainBudgetMilliNodeHours') }})
    train_cost_milli_node_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainCostMilliNodeHours') }})
    
