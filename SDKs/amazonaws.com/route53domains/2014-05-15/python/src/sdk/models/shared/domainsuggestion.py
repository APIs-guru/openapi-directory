from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DomainSuggestion:
    r"""DomainSuggestion
    Information about one suggested domain name.
    """
    
    availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Availability') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    
