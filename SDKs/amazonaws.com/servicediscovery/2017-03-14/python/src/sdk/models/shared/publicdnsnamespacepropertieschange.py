from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublicDNSNamespacePropertiesChange:
    r"""PublicDNSNamespacePropertiesChange
    Updated properties for the public DNS namespace.
    """
    
    dns_properties: PublicDNSPropertiesMutableChange = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsProperties') }})
    
