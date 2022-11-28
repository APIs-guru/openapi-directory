from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Subtitles:
    r"""Subtitles
    Generate subtitles for your batch transcription job.
    """
    
    formats: Optional[List[SubtitleFormatEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Formats') }})
    
