from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileActionEntity:
    r"""FileActionEntity
    Move file/folder
    """
    
    file_migration_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_migration_id') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
