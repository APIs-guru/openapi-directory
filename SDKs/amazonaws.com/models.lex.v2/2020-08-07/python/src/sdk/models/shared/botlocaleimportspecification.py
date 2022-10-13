from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import voicesettings


@dataclass_json
@dataclass
class BotLocaleImportSpecification:
    bot_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    locale_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    nlu_intent_confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluIntentConfidenceThreshold' }})
    voice_settings: Optional[voicesettings.VoiceSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceSettings' }})
    
