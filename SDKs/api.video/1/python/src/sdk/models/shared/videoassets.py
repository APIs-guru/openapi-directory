from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoAssets:
    r"""VideoAssets
    Collection of details about the video object that you can use to work with the video object.
    """
    
    hls: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hls') }})
    iframe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iframe') }})
    mp4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mp4') }})
    player: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    
