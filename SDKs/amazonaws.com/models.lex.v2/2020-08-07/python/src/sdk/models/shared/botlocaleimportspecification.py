from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BotLocaleImportSpecification:
    r"""BotLocaleImportSpecification
    Provides the bot locale parameters required for importing a bot locale.
    """
    
    bot_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    locale_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    nlu_intent_confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluIntentConfidenceThreshold') }})
    voice_settings: Optional[VoiceSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceSettings') }})
    
