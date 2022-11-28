from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SlotMigration:
    r"""SlotMigration
    Represents the progress of an online resharding operation.
    """
    
    progress_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressPercentage') }})
    
