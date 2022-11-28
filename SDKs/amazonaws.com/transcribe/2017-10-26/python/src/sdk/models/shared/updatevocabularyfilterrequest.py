from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateVocabularyFilterRequest:
    vocabulary_filter_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilterName') }})
    vocabulary_filter_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilterFileUri') }})
    words: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Words') }})
    
