from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PrivateDNSPropertiesMutable:
    r"""PrivateDNSPropertiesMutable
    DNS properties for the private DNS namespace.
    """
    
    soa: Soa = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SOA') }})
    
