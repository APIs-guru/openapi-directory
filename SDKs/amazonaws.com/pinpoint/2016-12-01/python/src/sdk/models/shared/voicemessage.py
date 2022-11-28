from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VoiceMessage:
    r"""VoiceMessage
    Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    origination_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginationNumber') }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Substitutions') }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceId') }})
    
