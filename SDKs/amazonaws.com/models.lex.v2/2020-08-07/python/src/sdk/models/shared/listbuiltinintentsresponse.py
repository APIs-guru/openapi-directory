from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBuiltInIntentsResponse:
    built_in_intent_summaries: Optional[List[BuiltInIntentSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtInIntentSummaries') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
