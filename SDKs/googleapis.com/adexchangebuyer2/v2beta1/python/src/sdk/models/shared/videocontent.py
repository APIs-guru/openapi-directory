from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoContent:
    r"""VideoContent
    Video content for a creative.
    """
    
    video_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoUrl') }})
    video_vast_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoVastXml') }})
    
