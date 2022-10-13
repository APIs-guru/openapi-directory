from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRedshiftClusterRestoreStatus:
    current_restore_rate_in_mega_bytes_per_second: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentRestoreRateInMegaBytesPerSecond' }})
    elapsed_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElapsedTimeInSeconds' }})
    estimated_time_to_completion_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedTimeToCompletionInSeconds' }})
    progress_in_mega_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressInMegaBytes' }})
    snapshot_size_in_mega_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotSizeInMegaBytes' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
