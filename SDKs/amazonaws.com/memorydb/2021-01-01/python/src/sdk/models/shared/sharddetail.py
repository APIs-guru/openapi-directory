from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShardDetail:
    r"""ShardDetail
    Provides details of a shard in a snapshot
    """
    
    configuration: Optional[ShardConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    snapshot_creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotCreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
