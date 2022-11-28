from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileKey:
    r"""FileKey
    File key information
    """
    
    iv: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iv') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
