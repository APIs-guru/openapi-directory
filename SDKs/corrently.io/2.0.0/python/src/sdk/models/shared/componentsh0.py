from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Componentsh0:
    components: Optional[List[Componentsh0]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    describtion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('describtion') }})
    mutlityplier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutlityplier') }})
    per: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per') }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
