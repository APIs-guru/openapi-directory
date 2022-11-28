from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileshareParam:
    fs_iops: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fsIOPS') }})
    fs_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fsName') }})
    fs_size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fsSize') }})
    
