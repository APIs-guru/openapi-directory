from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import approvedecision
from . import dismissdecision
from . import accesslocations
from . import accessreason
from . import resourceproperties


@dataclass_json
@dataclass
class ApprovalRequest:
    approve: Optional[approvedecision.ApproveDecision] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approve' }})
    dismiss: Optional[dismissdecision.DismissDecision] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismiss' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    request_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestTime' }})
    requested_expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedExpiration' }})
    requested_locations: Optional[accesslocations.AccessLocations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedLocations' }})
    requested_reason: Optional[accessreason.AccessReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedReason' }})
    requested_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedResourceName' }})
    requested_resource_properties: Optional[resourceproperties.ResourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedResourceProperties' }})
    
