from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetIPAddressTypeRequest:
    ip_address_type: IPAddressTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    resource_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    resource_type: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
