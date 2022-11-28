from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Translation:
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    original_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalText') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    translated_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translatedText') }})
    
