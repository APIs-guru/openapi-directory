from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DiskUtilization:
    r"""DiskUtilization
    Target scaling by disk usage. Only applicable in the App Engine flexible environment.
    """
    
    target_read_bytes_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetReadBytesPerSecond') }})
    target_read_ops_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetReadOpsPerSecond') }})
    target_write_bytes_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetWriteBytesPerSecond') }})
    target_write_ops_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetWriteOpsPerSecond') }})
    
