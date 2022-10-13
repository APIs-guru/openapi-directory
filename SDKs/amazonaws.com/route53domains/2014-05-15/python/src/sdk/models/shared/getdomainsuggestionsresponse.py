from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domainsuggestion


@dataclass_json
@dataclass
class GetDomainSuggestionsResponse:
    suggestions_list: Optional[List[domainsuggestion.DomainSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuggestionsList' }})
    
