from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import backendconnectionerrors


@dataclass_json
@dataclass
class TelemetryRecord:
    backend_connection_errors: Optional[backendconnectionerrors.BackendConnectionErrors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackendConnectionErrors' }})
    segments_received_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentsReceivedCount' }})
    segments_rejected_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentsRejectedCount' }})
    segments_sent_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentsSentCount' }})
    segments_spillover_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentsSpilloverCount' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
