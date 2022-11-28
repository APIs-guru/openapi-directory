from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationSnapshotConfiguration:
    r"""ApplicationSnapshotConfiguration
    Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
    """
    
    snapshots_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotsEnabled') }})
    
