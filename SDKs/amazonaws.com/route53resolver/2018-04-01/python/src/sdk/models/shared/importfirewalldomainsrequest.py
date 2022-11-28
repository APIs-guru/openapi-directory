from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportFirewallDomainsRequest:
    domain_file_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainFileUrl') }})
    firewall_domain_list_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallDomainListId') }})
    operation: FirewallDomainImportOperationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operation') }})
    
