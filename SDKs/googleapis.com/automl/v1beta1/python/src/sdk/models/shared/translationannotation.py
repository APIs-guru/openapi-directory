from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textsnippet


@dataclass_json
@dataclass
class TranslationAnnotation:
    translated_content: Optional[textsnippet.TextSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translatedContent' }})
    
