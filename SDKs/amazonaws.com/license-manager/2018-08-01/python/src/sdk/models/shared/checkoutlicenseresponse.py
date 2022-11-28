from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckoutLicenseResponse:
    checkout_type: Optional[CheckoutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckoutType') }})
    entitlements_allowed: Optional[List[EntitlementData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntitlementsAllowed') }})
    expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expiration') }})
    issued_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuedAt') }})
    license_consumption_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConsumptionToken') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeId') }})
    signed_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignedToken') }})
    
