from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VoiceMessage:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    origination_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OriginationNumber' }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Substitutions' }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceId' }})
    
