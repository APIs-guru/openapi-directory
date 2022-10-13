from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accessstatus_enum


@dataclass_json
@dataclass
class GetAwsOrganizationsAccessStatusOutput:
    access_status: Optional[accessstatus_enum.AccessStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessStatus' }})
    
