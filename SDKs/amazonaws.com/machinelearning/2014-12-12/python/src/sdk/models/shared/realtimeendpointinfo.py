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
class RealtimeEndpointInfo:
    r"""RealtimeEndpointInfo
     Describes the real-time endpoint information for an <code>MLModel</code>.
    """
    
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_status: Optional[RealtimeEndpointStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointStatus') }})
    endpoint_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointUrl') }})
    peak_requests_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeakRequestsPerSecond') }})
    
