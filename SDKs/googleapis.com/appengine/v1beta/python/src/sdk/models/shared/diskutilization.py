from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DiskUtilization:
    target_read_bytes_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetReadBytesPerSecond' }})
    target_read_ops_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetReadOpsPerSecond' }})
    target_write_bytes_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetWriteBytesPerSecond' }})
    target_write_ops_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetWriteOpsPerSecond' }})
    
