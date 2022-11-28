from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Config:
    providers: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('providers') }})
    topics: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    
