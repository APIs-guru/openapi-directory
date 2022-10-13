from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import languagecode_enum


@dataclass_json
@dataclass
class UpdateVocabularyRequest:
    language_code: languagecode_enum.LanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    phrases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phrases' }})
    vocabulary_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFileUri' }})
    vocabulary_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyName' }})
    
