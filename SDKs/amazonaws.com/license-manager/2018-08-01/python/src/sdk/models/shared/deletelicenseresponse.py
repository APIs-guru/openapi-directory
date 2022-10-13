from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import licensedeletionstatus_enum


@dataclass_json
@dataclass
class DeleteLicenseResponse:
    deletion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletionDate' }})
    status: Optional[licensedeletionstatus_enum.LicenseDeletionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
