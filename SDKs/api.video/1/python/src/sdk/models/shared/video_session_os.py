from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoSessionOs:
    r"""VideoSessionOs
    The operating system the viewer is on.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    shortname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortname') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
