from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceID:
    r"""DeviceID
    Identifier of a device.
    """
    
    build_brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBrand') }})
    build_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildDevice') }})
    
