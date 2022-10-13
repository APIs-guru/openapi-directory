from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import licensecountingtype_enum
from . import productinformation
from . import tag


@dataclass_json
@dataclass
class CreateLicenseConfigurationRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    disassociate_when_not_found: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisassociateWhenNotFound' }})
    license_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseCount' }})
    license_count_hard_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseCountHardLimit' }})
    license_counting_type: licensecountingtype_enum.LicenseCountingTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseCountingType' }})
    license_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseRules' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    product_information_list: Optional[List[productinformation.ProductInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductInformationList' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
