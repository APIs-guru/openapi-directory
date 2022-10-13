from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import emotionname_enum


@dataclass_json
@dataclass
class Emotion:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    type: Optional[emotionname_enum.EmotionNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
