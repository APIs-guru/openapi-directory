from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateLicenseConfigurationRequest:
    license_configuration_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConfigurationArn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    disassociate_when_not_found: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisassociateWhenNotFound') }})
    license_configuration_status: Optional[LicenseConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConfigurationStatus') }})
    license_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseCount') }})
    license_count_hard_limit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseCountHardLimit') }})
    license_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseRules') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    product_information_list: Optional[List[ProductInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationList') }})
    
