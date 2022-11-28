from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TranslateTextResponse:
    source_language_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceLanguageCode') }})
    target_language_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetLanguageCode') }})
    translated_text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranslatedText') }})
    applied_terminologies: Optional[List[AppliedTerminology]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppliedTerminologies') }})
    
