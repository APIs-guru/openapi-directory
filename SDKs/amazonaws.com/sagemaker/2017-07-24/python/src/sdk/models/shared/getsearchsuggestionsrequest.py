from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSearchSuggestionsRequest:
    resource: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    suggestion_query: Optional[SuggestionQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuggestionQuery') }})
    
