from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLicenseRequest:
    beneficiary: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beneficiary') }})
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    consumption_configuration: ConsumptionConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumptionConfiguration') }})
    entitlements: List[Entitlement] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entitlements') }})
    home_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    issuer: Issuer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    license_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseName') }})
    product_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    product_sku: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductSKU') }})
    validity: DatetimeRange = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Validity') }})
    license_metadata: Optional[List[Metadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseMetadata') }})
    
