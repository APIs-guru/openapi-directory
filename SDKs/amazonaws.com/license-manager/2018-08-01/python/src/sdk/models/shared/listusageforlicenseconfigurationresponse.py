from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUsageForLicenseConfigurationResponse:
    license_configuration_usage_list: Optional[List[LicenseConfigurationUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConfigurationUsageList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
