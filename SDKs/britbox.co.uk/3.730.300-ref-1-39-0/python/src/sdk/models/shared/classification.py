from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Classification:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    images: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    level: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    system: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    advisory_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advisoryText') }})
    
