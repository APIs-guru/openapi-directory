from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateResourceDataSyncRequest:
    sync_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncName') }})
    s3_destination: Optional[ResourceDataSyncS3Destination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Destination') }})
    sync_source: Optional[ResourceDataSyncSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncSource') }})
    sync_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncType') }})
    
