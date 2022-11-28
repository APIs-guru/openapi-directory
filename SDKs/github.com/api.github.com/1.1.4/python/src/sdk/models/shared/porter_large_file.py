from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PorterLargeFile:
    r"""PorterLargeFile
    Porter Large File
    """
    
    oid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('oid') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    ref_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref_name') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
