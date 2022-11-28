from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateFirewallDomainsRequest:
    domains: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domains') }})
    firewall_domain_list_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallDomainListId') }})
    operation: FirewallDomainUpdateOperationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operation') }})
    
