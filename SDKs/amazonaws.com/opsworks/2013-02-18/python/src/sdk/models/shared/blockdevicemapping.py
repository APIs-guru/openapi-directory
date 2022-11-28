from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BlockDeviceMapping:
    r"""BlockDeviceMapping
    Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html\">BlockDeviceMapping</a> data type. 
    """
    
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceName') }})
    ebs: Optional[EbsBlockDevice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ebs') }})
    no_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoDevice') }})
    virtual_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VirtualName') }})
    
