from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EbsBlockDevice:
    r"""EbsBlockDevice
    Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html\">EbsBlockDevice</a> data type.
    """
    
    delete_on_termination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteOnTermination') }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iops') }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotId') }})
    volume_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeSize') }})
    volume_type: Optional[VolumeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeType') }})
    
