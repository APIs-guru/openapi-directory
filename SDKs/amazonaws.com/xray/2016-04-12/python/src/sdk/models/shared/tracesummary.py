from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TraceSummary:
    r"""TraceSummary
    Metadata generated from the segment documents in a trace.
    """
    
    annotations: Optional[dict[str, List[ValueWithServiceIds]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Annotations') }})
    availability_zones: Optional[List[AvailabilityZoneDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    entry_point: Optional[ServiceID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntryPoint') }})
    error_root_causes: Optional[List[ErrorRootCause]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorRootCauses') }})
    fault_root_causes: Optional[List[FaultRootCause]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaultRootCauses') }})
    has_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasError') }})
    has_fault: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasFault') }})
    has_throttle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasThrottle') }})
    http: Optional[HTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Http') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    instance_ids: Optional[List[InstanceIDDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceIds') }})
    is_partial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPartial') }})
    matched_event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchedEventTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_ar_ns: Optional[List[ResourceArnDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNs') }})
    response_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseTime') }})
    response_time_root_causes: Optional[List[ResponseTimeRootCause]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseTimeRootCauses') }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Revision') }})
    service_ids: Optional[List[ServiceID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceIds') }})
    users: Optional[List[TraceUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Users') }})
    
