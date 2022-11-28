from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Image:
    frames: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frames') }})
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    mp4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mp4') }})
    mp4_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mp4_size') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    webp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webp') }})
    webp_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webp_size') }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
