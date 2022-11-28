from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplicationRunStageDetails:
    r"""ReplicationRunStageDetails
    Details of the current stage of a replication run.
    """
    
    stage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    stage_progress: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageProgress') }})
    
