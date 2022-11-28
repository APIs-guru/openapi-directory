from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContentModerationDetection:
    r"""ContentModerationDetection
    Information about an inappropriate, unwanted, or offensive content label detection in a stored video.
    """
    
    moderation_label: Optional[ModerationLabel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModerationLabel') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
