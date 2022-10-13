from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import changetokenstatus_enum


@dataclass_json
@dataclass
class GetChangeTokenStatusResponse:
    change_token_status: Optional[changetokenstatus_enum.ChangeTokenStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeTokenStatus' }})
    
