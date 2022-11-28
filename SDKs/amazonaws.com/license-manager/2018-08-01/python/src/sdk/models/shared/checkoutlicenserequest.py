from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckoutLicenseRequest:
    checkout_type: CheckoutTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckoutType') }})
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    entitlements: List[EntitlementData] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entitlements') }})
    key_fingerprint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyFingerprint') }})
    product_sku: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductSKU') }})
    beneficiary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beneficiary') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeId') }})
    
