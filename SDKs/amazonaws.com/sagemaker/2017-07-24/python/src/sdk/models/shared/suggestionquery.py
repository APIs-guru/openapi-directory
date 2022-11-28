from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestionQuery:
    r"""SuggestionQuery
    Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response.
    """
    
    property_name_query: Optional[PropertyNameQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyNameQuery') }})
    
