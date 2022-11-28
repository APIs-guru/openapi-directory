from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetOnDeviceService:
    r"""TargetOnDeviceService
    An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. AWS Snow Family supports Amazon S3 and NFS (Network File System).
    """
    
    service_name: Optional[DeviceServiceNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    transfer_option: Optional[TransferOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransferOption') }})
    
