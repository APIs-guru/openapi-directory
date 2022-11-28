from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteInventoryResult:
    deletion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletionId') }})
    deletion_summary: Optional[InventoryDeletionSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletionSummary') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    
