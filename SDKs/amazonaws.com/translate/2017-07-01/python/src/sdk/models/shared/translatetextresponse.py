from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appliedterminology


@dataclass_json
@dataclass
class TranslateTextResponse:
    applied_terminologies: Optional[List[appliedterminology.AppliedTerminology]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppliedTerminologies' }})
    source_language_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceLanguageCode' }})
    target_language_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLanguageCode' }})
    translated_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranslatedText' }})
    
