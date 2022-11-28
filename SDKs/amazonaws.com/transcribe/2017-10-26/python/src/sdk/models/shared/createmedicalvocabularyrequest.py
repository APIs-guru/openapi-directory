from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateMedicalVocabularyRequest:
    language_code: LanguageCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    vocabulary_file_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFileUri') }})
    vocabulary_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
