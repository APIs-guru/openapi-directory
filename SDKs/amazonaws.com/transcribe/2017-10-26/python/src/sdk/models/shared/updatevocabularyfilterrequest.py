from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateVocabularyFilterRequest:
    vocabulary_filter_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFilterFileUri' }})
    vocabulary_filter_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFilterName' }})
    words: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Words' }})
    
