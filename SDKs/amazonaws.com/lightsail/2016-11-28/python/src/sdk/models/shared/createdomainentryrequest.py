from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import domainentry


@dataclass_json
@dataclass
class CreateDomainEntryRequest:
    domain_entry: domainentry.DomainEntry = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainEntry' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    
