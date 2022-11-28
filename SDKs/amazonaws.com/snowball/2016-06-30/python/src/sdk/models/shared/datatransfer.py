from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataTransfer:
    r"""DataTransfer
    Defines the real-time status of a Snow device's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.
    """
    
    bytes_transferred: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesTransferred') }})
    objects_transferred: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectsTransferred') }})
    total_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalBytes') }})
    total_objects: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalObjects') }})
    
