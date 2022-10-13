from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetLicenseRequest:
    license_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
