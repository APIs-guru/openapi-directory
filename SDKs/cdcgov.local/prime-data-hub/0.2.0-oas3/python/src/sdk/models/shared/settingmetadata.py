from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SettingMetadata:
    r"""SettingMetadata
    The metadata associated with an setting
    """
    
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    version: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
