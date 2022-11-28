from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubtitlesOutput:
    r"""SubtitlesOutput
    Specify the output format for your subtitle file.
    """
    
    formats: Optional[List[SubtitleFormatEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Formats') }})
    subtitle_file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubtitleFileUris') }})
    
