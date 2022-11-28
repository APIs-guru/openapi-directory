from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublicDNSPropertiesMutable:
    r"""PublicDNSPropertiesMutable
    DNS properties for the public DNS namespace.
    """
    
    soa: Soa = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SOA') }})
    
