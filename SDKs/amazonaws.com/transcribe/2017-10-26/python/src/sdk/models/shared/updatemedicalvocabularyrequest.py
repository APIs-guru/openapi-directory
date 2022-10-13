from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import languagecode_enum


@dataclass_json
@dataclass
class UpdateMedicalVocabularyRequest:
    language_code: languagecode_enum.LanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    vocabulary_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFileUri' }})
    vocabulary_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyName' }})
    
