from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationSnapshotConfigurationUpdate:
    r"""ApplicationSnapshotConfigurationUpdate
    Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
    """
    
    snapshots_enabled_update: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotsEnabledUpdate') }})
    
