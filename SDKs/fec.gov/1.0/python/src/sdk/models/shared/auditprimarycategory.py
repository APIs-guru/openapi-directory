from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuditPrimaryCategory:
    primary_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_category_id') }})
    primary_category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_category_name') }})
    
