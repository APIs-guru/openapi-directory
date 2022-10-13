from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TranslateTextRequest:
    source_language_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceLanguageCode' }})
    target_language_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLanguageCode' }})
    terminology_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminologyNames' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    
