from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdCode:
    ad_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adCode') }})
    amp_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ampBody') }})
    amp_head: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ampHead') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
