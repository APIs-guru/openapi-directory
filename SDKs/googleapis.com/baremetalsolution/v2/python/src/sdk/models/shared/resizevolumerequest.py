from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResizeVolumeRequest:
    r"""ResizeVolumeRequest
    Request for emergency resize Volume.
    """
    
    size_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeGib') }})
    
