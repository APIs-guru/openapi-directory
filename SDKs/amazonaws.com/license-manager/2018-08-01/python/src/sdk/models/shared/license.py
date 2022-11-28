from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class License:
    r"""License
    Software license that is managed in AWS License Manager.
    """
    
    beneficiary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beneficiary') }})
    consumption_configuration: Optional[ConsumptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumptionConfiguration') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime') }})
    entitlements: Optional[List[Entitlement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entitlements') }})
    home_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    issuer: Optional[IssuerDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    license_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    license_metadata: Optional[List[Metadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseMetadata') }})
    license_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseName') }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    product_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductSKU') }})
    status: Optional[LicenseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    validity: Optional[DatetimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Validity') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
