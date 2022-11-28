from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindingActor:
    r"""FindingActor
    Provides information about an entity that performed an action that produced a policy finding for a resource.
    """
    
    domain_details: Optional[DomainDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainDetails') }})
    ip_address_details: Optional[IPAddressDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressDetails') }})
    user_identity: Optional[UserIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userIdentity') }})
    
