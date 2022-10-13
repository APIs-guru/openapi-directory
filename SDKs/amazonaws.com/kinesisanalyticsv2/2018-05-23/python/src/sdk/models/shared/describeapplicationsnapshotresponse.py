from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import snapshotdetails


@dataclass_json
@dataclass
class DescribeApplicationSnapshotResponse:
    snapshot_details: snapshotdetails.SnapshotDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotDetails' }})
    
