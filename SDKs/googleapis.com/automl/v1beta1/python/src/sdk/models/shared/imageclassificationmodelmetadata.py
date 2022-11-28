from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageClassificationModelMetadata:
    r"""ImageClassificationModelMetadata
    Model metadata for image classification.
    """
    
    base_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseModelId') }})
    model_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelType') }})
    node_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    node_qps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeQps') }})
    stop_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopReason') }})
    train_budget: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainBudget') }})
    train_cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainCost') }})
    
