from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchInferenceJobConfig:
    item_exploration_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemExplorationConfig' }})
    
