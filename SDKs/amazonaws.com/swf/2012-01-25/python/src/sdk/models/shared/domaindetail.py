from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DomainDetail:
    r"""DomainDetail
    Contains details of a domain.
    """
    
    configuration: DomainConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    domain_info: DomainInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainInfo') }})
    
