from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigSnmPv3:
    context_engine_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context_engine_id') }})
    engine_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine_id') }})
    usm_db: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usm_db') }})
    vacm_db: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vacm_db') }})
    
