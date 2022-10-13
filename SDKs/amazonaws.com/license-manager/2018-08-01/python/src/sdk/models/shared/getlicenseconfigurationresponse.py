from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import automateddiscoveryinformation
from . import consumedlicensesummary
from . import licensecountingtype_enum
from . import managedresourcesummary
from . import productinformation
from . import tag


@dataclass_json
@dataclass
class GetLicenseConfigurationResponse:
    automated_discovery_information: Optional[automateddiscoveryinformation.AutomatedDiscoveryInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomatedDiscoveryInformation' }})
    consumed_license_summary_list: Optional[List[consumedlicensesummary.ConsumedLicenseSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedLicenseSummaryList' }})
    consumed_licenses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedLicenses' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    disassociate_when_not_found: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisassociateWhenNotFound' }})
    license_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConfigurationArn' }})
    license_configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConfigurationId' }})
    license_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseCount' }})
    license_count_hard_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseCountHardLimit' }})
    license_counting_type: Optional[licensecountingtype_enum.LicenseCountingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseCountingType' }})
    license_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseRules' }})
    managed_resource_summary_list: Optional[List[managedresourcesummary.ManagedResourceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedResourceSummaryList' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerAccountId' }})
    product_information_list: Optional[List[productinformation.ProductInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductInformationList' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
