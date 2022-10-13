from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlainTextMessageType:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceId' }})
    
