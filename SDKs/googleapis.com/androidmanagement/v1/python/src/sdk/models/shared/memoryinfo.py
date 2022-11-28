from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MemoryInfo:
    r"""MemoryInfo
    Information about device memory and storage.
    """
    
    total_internal_storage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalInternalStorage') }})
    total_ram: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRam') }})
    
