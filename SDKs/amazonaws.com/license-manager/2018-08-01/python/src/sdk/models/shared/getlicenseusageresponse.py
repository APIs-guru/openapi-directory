from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import licenseusage


@dataclass_json
@dataclass
class GetLicenseUsageResponse:
    license_usage: Optional[licenseusage.LicenseUsage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseUsage' }})
    
