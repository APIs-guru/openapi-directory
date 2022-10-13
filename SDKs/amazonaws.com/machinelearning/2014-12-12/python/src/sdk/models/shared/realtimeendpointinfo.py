from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import realtimeendpointstatus_enum


@dataclass_json
@dataclass
class RealtimeEndpointInfo:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_status: Optional[realtimeendpointstatus_enum.RealtimeEndpointStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointStatus' }})
    endpoint_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointUrl' }})
    peak_requests_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeakRequestsPerSecond' }})
    
