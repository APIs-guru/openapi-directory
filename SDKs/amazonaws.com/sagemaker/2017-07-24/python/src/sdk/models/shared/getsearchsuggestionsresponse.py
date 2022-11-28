from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSearchSuggestionsResponse:
    property_name_suggestions: Optional[List[PropertyNameSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyNameSuggestions') }})
    
