from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetLicenseRequest:
    license_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseArn') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
