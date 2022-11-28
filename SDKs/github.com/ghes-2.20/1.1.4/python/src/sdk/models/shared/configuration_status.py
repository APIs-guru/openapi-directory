from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigurationStatusProgress:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class ConfigurationStatus:
    progress: Optional[List[ConfigurationStatusProgress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
