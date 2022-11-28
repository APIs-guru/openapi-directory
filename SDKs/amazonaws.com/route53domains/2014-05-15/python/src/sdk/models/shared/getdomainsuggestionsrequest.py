from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetDomainSuggestionsRequest:
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    only_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnlyAvailable') }})
    suggestion_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuggestionCount') }})
    
