from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AudioLogSetting:
    r"""AudioLogSetting
    Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
    """
    
    destination: AudioLogDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
