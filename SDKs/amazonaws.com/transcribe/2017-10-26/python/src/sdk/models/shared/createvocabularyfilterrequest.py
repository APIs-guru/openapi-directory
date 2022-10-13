from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import languagecode_enum
from . import tag


@dataclass_json
@dataclass
class CreateVocabularyFilterRequest:
    language_code: languagecode_enum.LanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vocabulary_filter_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFilterFileUri' }})
    vocabulary_filter_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFilterName' }})
    words: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Words' }})
    
