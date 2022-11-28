from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckoutBorrowLicenseRequest:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    digital_signature_method: DigitalSignatureMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DigitalSignatureMethod') }})
    entitlements: List[EntitlementData] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entitlements') }})
    license_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    checkout_metadata: Optional[List[Metadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckoutMetadata') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeId') }})
    
