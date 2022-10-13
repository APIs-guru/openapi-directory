from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import licensestatus_enum


@dataclass_json
@dataclass
class CreateLicenseVersionResponse:
    license_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    status: Optional[licensestatus_enum.LicenseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
