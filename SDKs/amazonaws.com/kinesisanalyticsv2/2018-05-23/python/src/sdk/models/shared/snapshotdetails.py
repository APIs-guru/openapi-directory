from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SnapshotDetails:
    r"""SnapshotDetails
    Provides details about a snapshot of application state.
    """
    
    application_version_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    snapshot_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotName') }})
    snapshot_status: SnapshotStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotStatus') }})
    snapshot_creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotCreationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
