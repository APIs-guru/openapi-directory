from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VoiceSettings:
    r"""VoiceSettings
    Defines settings for using an Amazon Polly voice to communicate with a user.
    """
    
    voice_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceId') }})
    
