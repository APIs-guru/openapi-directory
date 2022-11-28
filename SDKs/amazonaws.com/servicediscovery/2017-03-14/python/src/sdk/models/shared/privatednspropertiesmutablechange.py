from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PrivateDNSPropertiesMutableChange:
    r"""PrivateDNSPropertiesMutableChange
    Updated DNS properties for the private DNS namespace.
    """
    
    soa: SoaChange = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SOA') }})
    
