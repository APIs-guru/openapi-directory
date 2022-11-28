from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Volume:
    r"""Volume
    Volume describes a volume and parameters for it to be mounted to a VM.
    """
    
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    gcs: Optional[Gcs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcs') }})
    mount_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountOptions') }})
    mount_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPath') }})
    nfs: Optional[Nfs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfs') }})
    
