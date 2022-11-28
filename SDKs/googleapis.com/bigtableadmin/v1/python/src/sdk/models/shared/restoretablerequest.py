from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RestoreTableRequest:
    r"""RestoreTableRequest
    The request for RestoreTable.
    """
    
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableId') }})
    
