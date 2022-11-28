from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CompatibleImage:
    r"""CompatibleImage
    A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snow device AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device.
    """
    
    ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmiId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
