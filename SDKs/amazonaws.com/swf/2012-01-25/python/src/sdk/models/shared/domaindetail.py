from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import domainconfiguration
from . import domaininfo


@dataclass_json
@dataclass
class DomainDetail:
    configuration: domainconfiguration.DomainConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    domain_info: domaininfo.DomainInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainInfo' }})
    
