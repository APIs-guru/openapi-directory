from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APICoreDtoClickStreamHitBrowserInfo:
    browser_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserType') }})
    family_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyId') }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
