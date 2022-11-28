from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchInferenceJobConfig:
    r"""BatchInferenceJobConfig
    The configuration details of a batch inference job.
    """
    
    item_exploration_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemExplorationConfig') }})
    
