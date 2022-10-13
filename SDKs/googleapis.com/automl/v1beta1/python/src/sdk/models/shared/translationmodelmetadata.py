from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TranslationModelMetadata:
    base_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseModel' }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceLanguageCode' }})
    target_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLanguageCode' }})
    
