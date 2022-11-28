from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReshardingStatus:
    r"""ReshardingStatus
    The status of the online resharding
    """
    
    slot_migration: Optional[SlotMigration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SlotMigration') }})
    
