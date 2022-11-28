from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DetailScopeEnum(str, Enum):
    PARAMETER = "Parameter"
    REPORT = "Report"
    ITEM = "Item"


@dataclass_json
@dataclass
class Detail:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    scope: Optional[DetailScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
