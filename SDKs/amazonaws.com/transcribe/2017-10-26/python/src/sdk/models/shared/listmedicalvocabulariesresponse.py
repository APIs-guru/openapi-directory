from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMedicalVocabulariesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status: Optional[VocabularyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    vocabularies: Optional[List[VocabularyInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Vocabularies') }})
    
