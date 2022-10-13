from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import valuewithserviceids
from . import availabilityzonedetail
from . import serviceid
from . import errorrootcause
from . import faultrootcause
from . import http
from . import instanceiddetail
from . import resourcearndetail
from . import responsetimerootcause
from . import serviceid
from . import traceuser


@dataclass_json
@dataclass
class TraceSummary:
    annotations: Optional[dict[str, List[valuewithserviceids.ValueWithServiceIds]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Annotations' }})
    availability_zones: Optional[List[availabilityzonedetail.AvailabilityZoneDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZones' }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duration' }})
    entry_point: Optional[serviceid.ServiceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntryPoint' }})
    error_root_causes: Optional[List[errorrootcause.ErrorRootCause]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorRootCauses' }})
    fault_root_causes: Optional[List[faultrootcause.FaultRootCause]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaultRootCauses' }})
    has_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasError' }})
    has_fault: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasFault' }})
    has_throttle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasThrottle' }})
    http: Optional[http.HTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Http' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    instance_ids: Optional[List[instanceiddetail.InstanceIDDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceIds' }})
    is_partial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPartial' }})
    matched_event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchedEventTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_ar_ns: Optional[List[resourcearndetail.ResourceArnDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARNs' }})
    response_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseTime' }})
    response_time_root_causes: Optional[List[responsetimerootcause.ResponseTimeRootCause]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseTimeRootCauses' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Revision' }})
    service_ids: Optional[List[serviceid.ServiceID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceIds' }})
    users: Optional[List[traceuser.TraceUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Users' }})
    
