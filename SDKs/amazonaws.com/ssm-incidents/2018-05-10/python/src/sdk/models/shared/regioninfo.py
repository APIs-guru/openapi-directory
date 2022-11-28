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
class RegionInfo:
    r"""RegionInfo
    Information about a Region in your replication set.
    """
    
    status: RegionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_update_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sse_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sseKmsKeyId') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    
