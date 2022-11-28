from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetLicenseConfigurationResponse:
    automated_discovery_information: Optional[AutomatedDiscoveryInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomatedDiscoveryInformation') }})
    consumed_license_summary_list: Optional[List[ConsumedLicenseSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedLicenseSummaryList') }})
    consumed_licenses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedLicenses') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    disassociate_when_not_found: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisassociateWhenNotFound') }})
    license_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConfigurationArn') }})
    license_configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConfigurationId') }})
    license_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseCount') }})
    license_count_hard_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseCountHardLimit') }})
    license_counting_type: Optional[LicenseCountingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseCountingType') }})
    license_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseRules') }})
    managed_resource_summary_list: Optional[List[ManagedResourceSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManagedResourceSummaryList') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerAccountId') }})
    product_information_list: Optional[List[ProductInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationList') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
