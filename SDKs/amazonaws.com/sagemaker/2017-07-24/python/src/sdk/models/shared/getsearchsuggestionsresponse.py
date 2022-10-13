from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import propertynamesuggestion


@dataclass_json
@dataclass
class GetSearchSuggestionsResponse:
    property_name_suggestions: Optional[List[propertynamesuggestion.PropertyNameSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertyNameSuggestions' }})
    
