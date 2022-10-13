from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import licenseconfigurationusage


@dataclass_json
@dataclass
class ListUsageForLicenseConfigurationResponse:
    license_configuration_usage_list: Optional[List[licenseconfigurationusage.LicenseConfigurationUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConfigurationUsageList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
