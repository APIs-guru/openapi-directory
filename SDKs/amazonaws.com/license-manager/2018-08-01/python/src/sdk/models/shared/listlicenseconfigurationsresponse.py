from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import licenseconfiguration


@dataclass_json
@dataclass
class ListLicenseConfigurationsResponse:
    license_configurations: Optional[List[licenseconfiguration.LicenseConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConfigurations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
