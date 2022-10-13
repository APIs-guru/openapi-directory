from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRedshiftClusterClusterSnapshotCopyStatus:
    destination_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationRegion' }})
    manual_snapshot_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManualSnapshotRetentionPeriod' }})
    retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionPeriod' }})
    snapshot_copy_grant_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotCopyGrantName' }})
    
