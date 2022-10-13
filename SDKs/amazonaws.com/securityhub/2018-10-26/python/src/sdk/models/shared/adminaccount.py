from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import adminstatus_enum


@dataclass_json
@dataclass
class AdminAccount:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    status: Optional[adminstatus_enum.AdminStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
