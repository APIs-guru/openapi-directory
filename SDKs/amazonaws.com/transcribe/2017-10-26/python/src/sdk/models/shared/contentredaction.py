from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContentRedaction:
    r"""ContentRedaction
    Settings for content redaction within a transcription job.
    """
    
    redaction_output: RedactionOutputEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedactionOutput') }})
    redaction_type: RedactionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedactionType') }})
    
