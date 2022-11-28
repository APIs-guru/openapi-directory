from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LaunchProfileInitializationActiveDirectory:
    computer_attributes: Optional[List[ActiveDirectoryComputerAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computerAttributes') }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directoryId') }})
    directory_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directoryName') }})
    dns_ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsIpAddresses') }})
    organizational_unit_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationalUnitDistinguishedName') }})
    studio_component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentId') }})
    studio_component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentName') }})
    
