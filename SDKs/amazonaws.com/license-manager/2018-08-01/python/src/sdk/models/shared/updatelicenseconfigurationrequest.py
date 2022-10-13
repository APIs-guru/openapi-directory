from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import licenseconfigurationstatus_enum
from . import productinformation


@dataclass_json
@dataclass
class UpdateLicenseConfigurationRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    disassociate_when_not_found: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisassociateWhenNotFound' }})
    license_configuration_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConfigurationArn' }})
    license_configuration_status: Optional[licenseconfigurationstatus_enum.LicenseConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConfigurationStatus' }})
    license_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseCount' }})
    license_count_hard_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseCountHardLimit' }})
    license_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseRules' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    product_information_list: Optional[List[productinformation.ProductInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductInformationList' }})
    
