from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLicenseConfigurationRequest:
    license_counting_type: LicenseCountingTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseCountingType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    disassociate_when_not_found: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisassociateWhenNotFound') }})
    license_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseCount') }})
    license_count_hard_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseCountHardLimit') }})
    license_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseRules') }})
    product_information_list: Optional[List[ProductInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationList') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
