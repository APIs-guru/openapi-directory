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
class TelemetryRecord:
    r"""TelemetryRecord
    <p/>
    """
    
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    backend_connection_errors: Optional[BackendConnectionErrors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackendConnectionErrors') }})
    segments_received_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentsReceivedCount') }})
    segments_rejected_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentsRejectedCount') }})
    segments_sent_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentsSentCount') }})
    segments_spillover_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentsSpilloverCount') }})
    
