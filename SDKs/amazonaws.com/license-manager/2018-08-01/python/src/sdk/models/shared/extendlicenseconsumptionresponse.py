from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExtendLicenseConsumptionResponse:
    expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expiration' }})
    license_consumption_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConsumptionToken' }})
    
