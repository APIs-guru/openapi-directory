from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddSubsiteRequest:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_name') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
