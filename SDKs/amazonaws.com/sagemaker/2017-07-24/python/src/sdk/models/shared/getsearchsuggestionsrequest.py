from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourcetype_enum
from . import suggestionquery


@dataclass_json
@dataclass
class GetSearchSuggestionsRequest:
    resource: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resource' }})
    suggestion_query: Optional[suggestionquery.SuggestionQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuggestionQuery' }})
    
