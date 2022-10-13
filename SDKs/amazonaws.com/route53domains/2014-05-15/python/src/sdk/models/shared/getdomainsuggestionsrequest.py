from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetDomainSuggestionsRequest:
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    only_available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnlyAvailable' }})
    suggestion_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuggestionCount' }})
    
