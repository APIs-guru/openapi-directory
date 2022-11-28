from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActiveDirectoryConfiguration:
    r"""ActiveDirectoryConfiguration
    The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.
    """
    
    computer_attributes: Optional[List[ActiveDirectoryComputerAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computerAttributes') }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directoryId') }})
    organizational_unit_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationalUnitDistinguishedName') }})
    
