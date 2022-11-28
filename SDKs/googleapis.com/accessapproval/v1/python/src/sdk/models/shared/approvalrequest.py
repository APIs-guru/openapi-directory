from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApprovalRequest:
    r"""ApprovalRequest
    A request for the customer to approve access to a resource.
    """
    
    approve: Optional[ApproveDecision] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approve') }})
    dismiss: Optional[DismissDecision] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismiss') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTime') }})
    requested_expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExpiration') }})
    requested_locations: Optional[AccessLocations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedLocations') }})
    requested_reason: Optional[AccessReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedReason') }})
    requested_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedResourceName') }})
    requested_resource_properties: Optional[ResourceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedResourceProperties') }})
    
