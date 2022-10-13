from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExtendLicenseConsumptionRequest:
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    license_consumption_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConsumptionToken' }})
    
